import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { followUser, updateCurrUser } from "../../store/userSlice";
import './UserSuggestion.css'

export const UserSuggestion = ({username, usertag, userId}) => {
  const dispatch = useDispatch()
  const {token, user} = useSelector((store)=>store.authenticate)
  const {users} = useSelector((store)=>store.users)

  let avatar = users.find((userItem)=>userItem.username===username)?.avatar
  return (
    
      <div>
      <div className="sidebarfeed-user">
        <Link onClick={()=>dispatch(updateCurrUser(username))} className="feedbar-link-tag" to="/profile">
          <div className="avatar-round wd-50 ht-50">
          {
            avatar.length!==0 ? <img className="avatar-image" src={`${avatar}`} />
            : <div className="avatar-letter">{username[0].toUpperCase()}</div>
          }
          </div>
          <div className="username-tag">
            <small>{username}</small>
            <small>{usertag}</small>
          </div>
        </Link>
        <div>
          <button onClick={()=> dispatch(followUser({followUserId: userId, encodedToken: token, dispatch}))} className="sidebarfeed-button-secondary">Follow</button>
        </div>
      </div>
    </div>
    
  );
};
