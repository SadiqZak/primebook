import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authoriseUser } from "../../store/authSlice";
import "./Login.css";

const Login = () => {
  const [userLog, setUserLog] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(
      authoriseUser({ username: userLog.username, password: userLog.password })
    );
    navigate("/");
  };

  const guestLoginHandler = async () => {
    setUserLog({ username: "adarshbalika", password: "adarshBalika123" });
    dispatch(
      authoriseUser({ username: "adarshbalika", password: "adarshBalika123" })
    );
    navigate("/");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-cover"></div>
        <div className="login-right">
          <div className="login-wrapper">
            <h2>Please Login to continue</h2>
            <form onSubmit={loginHandler} className="login-form" action="">
              <div className="flex-dir-column-login">
                <small>Username:</small>
                <input
                  onChange={(e) =>
                    setUserLog({ ...userLog, username: e.target.value })
                  }
                  className="login-inp"
                  type="text"
                  placeholder="username"
                  required
                />
              </div>

              <div className="flex-dir-column-login">
                <small>Password:</small>
                <input
                  onChange={(e) =>
                    setUserLog({ ...userLog, password: e.target.value })
                  }
                  className="login-inp"
                  type="password"
                  placeholder="password"
                  required
                />
              </div>

              <button className="login-btn">Login</button>
            </form>
            <button onClick={guestLoginHandler} className="login-btn">
              Login as a guest
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
