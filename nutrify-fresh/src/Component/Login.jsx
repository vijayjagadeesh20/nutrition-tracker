import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "./Header";
import { UserContext } from "../contexts/context";

import indianFood from "../assets/indian-food-login.png";

export default function Login() {
  const loggedInData = useContext(UserContext);
  const navigate = useNavigate();

  const [usercred, setUserCreds] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function showMessage(msg, status) {
    setMessage(msg);
    setIsSuccess(status);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  function handleInput(event) {
    setUserCreds((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Login input:", usercred);

    fetch("https://nutrition-tracker-api-0fxs.onrender.com/login", {
      method: "POST",
      body: JSON.stringify(usercred),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response:", data);

        if (data.success) {
          showMessage("Login Successful", true);

          localStorage.setItem("nutrify-user", JSON.stringify(data.user));
          loggedInData.setLoggedUser(data.user);

          setUserCreds({
            email: "",
            password: "",
          });

          navigate("/track");
        } else {
          showMessage(data.message || "Invalid email or password", false);
        }
      })
      .catch((err) => {
        console.log(err);
        showMessage("Something went wrong. Please try again.", false);
      });
  }

  return (
    <>
      <Header />

      <div className="main-bg">
        <div className="container">
           <div className="form-parent login-form row align-items-center">
          <div className="col-md-4">
            <form action="" className="register-form" onSubmit={handleSubmit}>
              {message && (
                <p className={`login-msg ${isSuccess ? "success" : "error"}`}>
                  {message}
                </p>
              )}

              <h3>Login to NutriTrack</h3>

              <input
                type="text"
                className="inpt"
                onChange={handleInput}
                value={usercred.email}
                placeholder="Enter email"
                name="email"
                required
              />

              <input
                type="password"
                className="inpt"
                maxLength={12}
                onChange={handleInput}
                value={usercred.password}
                name="password"
                placeholder="Enter password"
                required
              />

              <button className="reg-btn">Login</button>

              <p>
                Dont have account?{" "}
                <Link
                  to="/register"
                  className="register-link text-decoration-none"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
          <div className="col-md-8">
            <div className="login-img">
              <img src={indianFood} className="w-100" alt="NutriTrack Indian food" />
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
}
