import React from "react";
// import "./FeedWall.css";

export const FeedWall = () => {
  return (
    <div>
      <div className="feed-container">
        <div className="feed-primary">
          <div className="avatar-round wd-50 ht-50"></div>
          <div className="feed-input-cont">
            <input
              className="feed-input"
              type="text"
              placeholder="What's happening?"
            />
          </div>
        </div>
        <div className="feed-footer">
          <div className="feed-footer-left">
            <div>
              <span className="material-icons feed-icons">emoji_emotions</span>
            </div>
            <div>
              <span className="material-icons feed-icons">image</span>
            </div>
          </div>
          <div className="feed-footer-right">
            <button className="cta-btn">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};
