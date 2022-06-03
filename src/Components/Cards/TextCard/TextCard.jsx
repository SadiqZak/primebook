import "./TextCard.css";
import React from "react";

export const TextCard = () => {
  return (
    <div>
      {" "}
      <div className="text-post-card">
        <div className="text-post-header-wrap">
          <div className="post-header">
            <div className="avatar-round wd-50 ht-50"></div>
            <div className="username-tag-post">
              <small>Adarsh Balika</small>
              <small>@adarshbalika</small>
            </div>
            <div className="date-posted">
              <small>May 15, 2022</small>
            </div>
          </div>
          <div>
            <span className="material-icons">more_vert</span>
          </div>
        </div>
        <div className="post-content">
          <span>Lorem ipsum ehrn you hjabe drean chekvmiomn</span>
        </div>
        <div className="post-footer">
          <div className="post-footer-child-left">
            <span className="material-icons post-footer-icons">
              favorite_border
            </span>
            <span className="material-icons post-footer-icons">
              chat_bubble_outline
            </span>
            <span className="material-icons post-footer-icons">
              bookmark_border
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
