import React from 'react'

export const Home = () => {
  return (
    <div className='middle-container'>
      <div className="middle-child">
        <div className='feed-container'>
          <div className="feed-primary">
            <div className="avatar-round wd-50 ht-50"></div>
            <div className='feed-input-cont'>
              <input className="feed-input" type="text" placeholder="What's happening?" />
            </div>
          </div>
          <div className="feed-footer">
            <div className="feed-footer-left">
              <div className="emoji"></div>
              <div className="image"></div>
            </div>
            <div className="feed-footer-right">
              <button className='cta-btn'>Post</button>
            </div>
          
          </div>
          
          
          
        </div>
      </div>
    </div>
  )
}
