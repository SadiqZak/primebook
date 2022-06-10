import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostToFeed } from "../../store/postSlice";

export const FeedWall = () => {
  const [postData, setPostData] = useState({ content: "" });
  const { token } = useSelector((store) => store.authenticate);
  const dispatch = useDispatch();

  const postHandler = (e) => {
    e.preventDefault();
    if(postData.content.length!=0){
      dispatch(addPostToFeed({ postData, encodedToken: token }));
      setPostData({ content: "" });
    }
    
  };

  return (
    <div>
      <form onClick={postHandler}>
        <div className="feed-container">
          <div className="feed-primary">
            <div className="avatar-round wd-50 ht-50"></div>
            <div className="feed-input-cont">
              <textarea
                value={postData.content}
                className="feed-input"
                type="text"
                placeholder="What's happening?"
                onChange={(e) => setPostData({ content: e.target.value })}
              />
            </div>
          </div>
          <div className="feed-footer">
            <div className="feed-footer-left">
              <div>
                <span className="material-icons feed-icons">
                  emoji_emotions
                </span>
              </div>
              <div>
                <span className="material-icons feed-icons">image</span>
              </div>
            </div>
            <div className="feed-footer-right">
              <button className="cta-btn">
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
