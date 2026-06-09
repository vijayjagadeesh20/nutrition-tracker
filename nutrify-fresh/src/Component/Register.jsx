import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import indianFood from "../assets/indian-food-login.png";
export default function Register() {
  let [inputdetails, setInputDetails] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  const [message, setMessage] = useState({
    text: "dummy-text",
    type: "invisible-msg",
  });

  function showMessage(text, type) {
    setMessage({ text, type });

    setTimeout(() => {
      setMessage({
        text: "",
        type: "invisible-msg",
      });
    }, 3000);
  }

  function handleInput(event) {
    console.log(event.target.name, event.target.value);

    // need to update in state variables

    setInputDetails((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }
  function handleSubmit(event) {
    // to make unwanted load on btn click
    event.preventDefault();
    console.log(inputdetails);

    // 201 data is success

    fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(inputdetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          showMessage(data.message, "success");

          setInputDetails({
            name: "",
            email: "",
            password: "",
            age: "",
          });
        } else {
          showMessage(data.message, "fail");
        }
      })
      .catch((err) => {
        console.log(err);
        showMessage("Registration Failed", "fail");
      });
  }

  return (
    <>
      <Header />

      <div className="main-bg">
        <div className="container">
          <div className="form-parent row align-items-center">
            <div className="col-md-4">
              <form action="" className="register-form" onSubmit={handleSubmit}>
                <p className={message.type}>{message.text}</p>

                <h3>Start your fitness</h3>

                <input
                  type="text"
                  className="inpt"
                  required
                  onChange={handleInput}
                  placeholder="Enter name"
                  name="name"
                  value={inputdetails.name}
                />

                <input
                  type="email"
                  className="inpt"
                  required
                  onChange={handleInput}
                  placeholder="Enter email"
                  name="email"
                  value={inputdetails.email}
                />

                <input
                  type="password"
                  className="inpt"
                  maxLength={8}
                  onChange={handleInput}
                  name="password"
                  placeholder="Enter password"
                  value={inputdetails.password}
                />
                <input
                  type="number"
                  className="inpt"
                  max={100}
                  min={12}
                  onChange={handleInput}
                  name="age"
                  placeholder="Enter age"
                  value={inputdetails.age}
                />
                <button className="reg-btn">Register</button>

                <p>
                  already registered ? <Link to={"/login"}>Login</Link>
                </p>
              </form>
            </div>
            <div className="col-md-8">
              <div className="login-img">
                <img
                  src={indianFood}
                  className="w-100"
                  alt="NutriTrack Indian food"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
