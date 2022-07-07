import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../../store/profileSlice";
import { unfollowUser, followUser } from "../../../store/userSlice";
import "../Profile.css";

export const ProfileChild = ({ userProfile , currentUser}) => {
  const { user, token } = useSelector((store) => store.authenticate);
  const { users } = useSelector((store) => store.users);
  const [editUserBool, setEditUserBool] = useState(false)
  const [bio, setBio]= useState(userProfile.bio)
  const [website, setWebsite] = useState(userProfile.website)
  const dispatch = useDispatch();

  const findUser = (arr) => {
    return arr.length !== 0
      ? arr.find((userCheck) => userCheck.username === user.username).following
      : [];
  };

  const checkUser = (arr) => {
    return arr.some(
      (checkUserItem) => checkUserItem.username === userProfile.username
    );
  };

  const unfollowHandler = () => {
    dispatch(
      unfollowUser({ followUserId: userProfile._id, encodedToken: token })
    );
  };

  const followHandler = () => {
    dispatch(
      followUser({ followUserId: userProfile._id, encodedToken: token })
    );
  };

  const editUserHandler=(e)=>{
    e.preventDefault()
    setEditUserBool(prev=>!prev)
    dispatch(editUser({userData:{bio, website}, encodedToken:token}))
    setBio(userProfile.bio)
    setWebsite(userProfile.website)
  }

  let avatar = users.find(
    (userItem) => userItem.username === userProfile.username
  )?.avatar;

  return (
    <div>
      {/* profile-card */}
        <div className="profile-container">
        <div className="cover-photo"></div>
        <div className="avatar-round profile-avatar ht-100 wd-100">
          <img className="avatar-image" src={`${avatar}`} />
        </div>
        <div className="profile-content">
          <div className="profile-header">
            <div className="profile-header-left">
              <div className="profile-username-container">
                <span>{`${userProfile?.firstName} ${userProfile?.lastName}`}</span>
                <small>{`@${userProfile?.username}`}</small>
              </div>
            </div>
            <div className="profile-header-right">
              {
                currentUser===user.username && 
                <>
                  {
                editUserBool &&
                <button onClick={editUserHandler} className="profile-cta-btn color-primary">Save Profile</button>
              }
              {
                !editUserBool &&
                <button onClick={editUserHandler} className="profile-cta-btn">Edit Profile</button>
              }
                </>
              }
          
            </div>
          </div>
          <div className="profile-body">
            {
              editUserBool &&
              <form onSubmit={editUserHandler} type="submit">
              <textarea className="edit-delete-post"  value={bio} onChange={(e)=>setBio(e.target.value)}/>
              <div className="profile-info">
  
                <div className="profile-info-child-flex">
                  <textarea className="edit-delete-post"  value={website} onChange={(e)=>setWebsite(e.target.value)}/>
                </div>
  
                <div className="profile-info-child">
                  <span className="material-icons">calendar_month</span> Joined
                  August 2020
                </div>
              </div>
            </form>
            }
            {
              !editUserBool &&
              <>
               <div className="profile-bio">{userProfile.bio}</div>
              <div className="profile-info">
                <div className="profile-info-child-flex">
                  <span>{userProfile.website}</span>
                </div>

                <div className="profile-info-child">
                  <span className="material-icons">calendar_month</span> Joined
                  August 2020
                </div>
              </div>
              </>
            }
         
          </div>
          <div className="profile-footer">
            <span>10 Followers</span>
            <span>5 Following</span>
            {userProfile.username !== user.username && (
              <>
                {checkUser(findUser(users)) && (
                  <button onClick={unfollowHandler} className="profile-cta-btn">
                    unfollow
                  </button>
                )}
                {!checkUser(findUser(users)) && (
                  <button onClick={followHandler} className="profile-cta-btn color-primary">
                    follow
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
