import React from "react";

export const UserSuggestion = ({username, usertag}) => {
  return (
    <div>
      <div className="sidebarfeed-user">
        <div className="avatar-round wd-50 ht-50"></div>
        <div className="username-tag">
          <small>{username}</small>
          <small>{usertag}</small>
        </div>
        <div>
          <button className="sidebarfeed-button-secondary">Follow</button>
        </div>
      </div>
    </div>
  );
};
