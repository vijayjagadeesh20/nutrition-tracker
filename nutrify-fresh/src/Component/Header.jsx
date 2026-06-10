import { useContext } from "react";
import { UserContext } from "../contexts/context";
import { useNavigate, NavLink } from "react-router-dom";

import nutriLogo from "../assets/nutritrack-final-logo.png";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
  const loggedData = useContext(UserContext);
  const navigate = useNavigate();

  const isLoggedIn = loggedData.loggedUser !== null;

  function logout() {
    localStorage.removeItem("nutrify-user");
    loggedData.setLoggedUser(null);
    navigate("/login");
  }

  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand" to="/home">
          <img
            src={nutriLogo}
            alt="NutriTrack"
            style={{ height: "50px" }}
          />
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <i className="bi bi-list text-white fs-2"></i>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >
          <ul className="navbar-nav align-items-lg-center gap-4 gap-lg-4">

            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link fw-semibold text-success"
                    : "nav-link text-white"
                }
              >
                Home
              </NavLink>
            </li>

            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/track"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link fw-semibold text-success"
                        : "nav-link text-white"
                    }
                  >
                    Track
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/diet"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link fw-semibold text-success"
                        : "nav-link text-white"
                    }
                  >
                    Diet
                  </NavLink>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger ms-lg-3"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link fw-semibold text-success"
                        : "nav-link text-white"
                    }
                  >
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className="btn btn-success ms-lg-2"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}