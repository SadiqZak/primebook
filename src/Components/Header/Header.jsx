import React, { useContext } from "react";
import Logo from "./Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { updateCurrUser } from "../../store/userSlice";
import { logoutUser } from "../../store/authSlice";
// console.log(logoutUser)

const Header = () => {
  const navigate = useNavigate();
  const { user, token } = useSelector((store) => store.authenticate);
  const {users}= useSelector((store)=>store.users)
  const dispatch = useDispatch();

  let avatar = users.find((userItem)=>userItem.username===user.username)?.avatar || user?.avatar

  return (
    <div className="header">
      <div className="header-wrapper">
        <Logo />
        <div className="search">
          <input placeholder="Search" type="text" />
          <span className="search-icon material-icons">search</span>
        </div>
        <div className="header_right">
          <div className="header-right">
            <Link
              onClick={() => dispatch(updateCurrUser(user.username))}
              to="/profile"
            >
              <div className="avatar-round ht-35 wd-35">
              {
            avatar.length!==0 ? <img className="avatar-image" src={`${avatar}`} />
            : <div className="avatar-letter">{user.username[0].toUpperCase()}</div>
          }
              </div>
            </Link>
            {token && (
              <button
                onClick={() => dispatch(logoutUser())}
                className="login-btn"
              >
                Logout
              </button>
            )}
            {!token && (
              <button onClick={() => navigate("/login")} className="login-btn">
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
