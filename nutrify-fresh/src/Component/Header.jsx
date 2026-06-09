import { useContext } from "react";
import { UserContext } from "../contexts/context";
import { useNavigate, NavLink } from "react-router-dom";

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
    <div className="header-section">
      <div className="container">
        <ul className="nav-list list-unstyled d-flex gap-5 justify-content-center py-4 mb-0">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "link-item active-link text-decoration-none"
                  : "link-item text-decoration-none"
              }
            >
              Home
            </NavLink>
          </li>

          {isLoggedIn && (
            <>
              <li>
                <NavLink
                  to="/track"
                  className={({ isActive }) =>
                    isActive
                      ? "link-item active-link text-decoration-none"
                      : "link-item text-decoration-none"
                  }
                >
                  Track
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/diet"
                  className={({ isActive }) =>
                    isActive
                      ? "link-item active-link text-decoration-none"
                      : "link-item text-decoration-none"
                  }
                >
                  Diet
                </NavLink>
              </li>

              <li className="logout-link" onClick={logout}>
                Logout
              </li>
            </>
          )}

          {!isLoggedIn && (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "link-item active-link text-decoration-none"
                      : "link-item text-decoration-none"
                  }
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "link-item active-link text-decoration-none"
                      : "link-item text-decoration-none"
                  }
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}