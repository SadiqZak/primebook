import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authoriseUser } from "../../store/authSlice";
import "./Login.css"

const Login = () => {
  const [userLog, setUserLog] = useState({username:"", password:""})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginHandler = async (e)=>{
      e.preventDefault()
      dispatch(authoriseUser({username:userLog.username, password:userLog.password}))
      navigate("/")

  }

  return (
    <>
      <div className="middle-container">
        <div className="middle-child">
          <div className="login-wrapper">
          <h2>Please Login to continue</h2>
            <form onSubmit={loginHandler } className="login-form" action="">
                <div className="flex-dir-column-login">
                <small>Username:</small>
                <input onChange={(e)=> setUserLog({...userLog, username:e.target.value})} className="login-inp" type="text" placeholder="adarshbalika" required/>
                </div>
                
                <div className="flex-dir-column-login">
                <small>Password:</small>
                <input onChange={(e)=> setUserLog({...userLog, password:e.target.value})} className="login-inp" type="password" placeholder="adarshBalika123" required/>
                </div>
               
                <button className="login-btn">Login</button>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export {Login};
