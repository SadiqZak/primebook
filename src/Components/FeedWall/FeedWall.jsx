import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPostToFeed } from "../../store/postSlice";


export const FeedWall = () => {
  const [postData, setPostData] =useState("");
  const dispatch = useDispatch()

  return (
    <div>
      <div className="feed-container">
        <div className="feed-primary">
          <div className="avatar-round wd-50 ht-50"></div>
          <div className="feed-input-cont">
            <textarea
              value={postData}
              className="feed-input"
              type="text"
              placeholder="What's happening?"
              onChange={(e)=>setPostData(e.target.value)}
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
            <button onClick={()=>dispatch(addPostToFeed({postData}))} className="cta-btn">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};
