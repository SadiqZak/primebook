import React from 'react'

export const ProfileChild = ({userProfile}) => {
    let userProfileChild = userProfile[0]
  return (
    <div>
          {/* profile-card */}
          <div className="profile-container">
                <div className="cover-photo"></div>
                <div className="avatar-round profile-avatar ht-100 wd-100"></div>
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
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-bio">
                        lorem ipsum check!
                    </div>
                    <div className="profile-info">
                        <small>://link/random</small>
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
