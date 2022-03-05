import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import "./login.css";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: "Renato",
      },
    };

    dispatch(action);

    const lastPath = localStorage.getItem("LastPath") || "/marvel";

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="login">
      <div className="login-div">
        <h1>Login to see Heros</h1>
        <hr />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};
