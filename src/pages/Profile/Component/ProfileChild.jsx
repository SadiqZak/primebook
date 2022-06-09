import axios from 'axios'
import React, { useState } from 'react'
import '../Profile.css'

export const ProfileChild = ({userProfile}) => {
   let userProfileChild = userProfile
   const [imageFile, setImageFile] = useState([])
  
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
                            <span>{userProfileChild?.username}</span>
                            <small>{`@${userProfileChild?.username}`}</small>
                        </div>
                    </div>
                    <div className="profile-header-right">
                        <button className='profile-cta-btn'>
                            Edit Profile
                        </button>
                        <div>
                        <input type="file" name="file" id="file" className="inputfile" />
                        <label for="file">Update Picture</label>
                        </div>
                        
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-bio">
                        The way I see it, If you want the rainbow you gotta put up with the rain!
                    </div>
                    <div className="profile-info">
                        <a href='https://mo-zak.netlify.app/'>https://mo-zak.netlify.app/</a>
                        <div className='profile-info-child'><span className='material-icons'>calendar_month</span> Joined August 2020</div>
                    </div>
                </div>
                <div className="profile-footer">
                    <span>3 Posts</span>
                    <span>10 Followers</span>
                    <span>5 Following</span>
                </div>
                </div>
            </div>
    </div>
  )
}
