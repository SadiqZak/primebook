import React, { useContext } from "react";
import Logo from "./Logo/Logo";
import {useDispatch} from 'react-redux'
import { useNavigate, Link } from "react-router-dom";
import { updateCurrUser } from "../../store/userSlice";
// import { AuthContext } from "../../backend/utils/auth-context";

const Header = () => {
  const navigate = useNavigate()
  // const { auth, setAuth} = useContext(AuthContext)
  const dispatch = useDispatch()
  return (
    <div className="header">
      <div className="header-wrapper">
        <Logo />
        <div className="search">
          <input placeholder="Search" type="text" />
          <span className="search-icon material-icons">search</span>
        </div>
        <div className="header_right">
          {/* { !auth.isAuthenticated && (
          <button
          className="login-btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
        {auth.isAuthenticated && (
          <button
          className="login-btn"
            onClick={() => {
              setAuth({...auth, isAuthenticated:!auth.isAuthenticated})
            }}
          >
            Logout
          </button> 
        )} */}
          <div className="header-right">
            <Link onClick={()=>dispatch(updateCurrUser("adarshbalika"))} to="/profile"><div className="avatar-round ht-35 wd-35"></div></Link>
              
            
            
            <button onClick={()=>navigate('/login')}className="login-btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
