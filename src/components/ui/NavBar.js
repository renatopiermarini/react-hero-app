import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import "./navbar.css";

export const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    const action = {
      type: types.logout,
    };

    dispatch(action);

    navigate("login", {
      replace: true,
    });
  };

  return (
    <nav className="my-navbar">
      <div className="div-1">
        <Link className="marvel" to="/">
          Home
        </Link>

        <NavLink
          className={({ isActive }) =>
            "marvel" + (isActive ? "marvel-active" : "")
          }
          to="/marvel"
        >
          Marvel
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            "marvel" + (isActive ? "marvel-active" : "")
          }
          to="/dc"
        >
          DC
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "marvel" + (isActive ? "marvel-active" : "")
          }
          to="/search"
        >
          Search
        </NavLink>
      </div>

      <div className="user-logout-div">
        <ul className="ul-nav">
          <span className="user">{user.name}</span>

          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
