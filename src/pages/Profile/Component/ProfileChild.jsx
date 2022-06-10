import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../Profile.css'

export const ProfileChild = ({userProfile}) => {
   const [imageFile, setImageFile] = useState([])
   const {user} = useSelector((store)=>store.authenticate)
  
  return (
    <div>
          {/* profile-card */}
          <div className="profile-container">
                <div className="cover-photo"></div>
                <div className="avatar-round profile-avatar ht-100 wd-100">
                    <img source="../../../Assets/profile.jpg"/>
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
                        <button className='profile-cta-btn'>
                            Edit Profile
                        </button>
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-bio">
                        {userProfile.bio}
                    </div>
                    <div className="profile-info">
                        <a href={`${userProfile.website}`}>{userProfile.website}</a>
                        <div className='profile-info-child'><span className='material-icons'>calendar_month</span> Joined August 2020</div>
                    </div>
                </div>
                <div className="profile-footer">
                    <span>10 Followers</span>
                    <span>5 Following</span>
                    {
                        userProfile.username !== user.username &&
                    <button className='profile-cta-btn'>
                        unfollow
                    </button>
                    }
                   
                </div>
                </div>
            </div>
    </div>
  )
}
