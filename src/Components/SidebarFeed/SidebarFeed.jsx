import React from 'react';
import { UserSuggestion } from '../UserSuggestion/UserSuggestion';
import "./SidebarFeed.css";

export const SidebarFeed = () => {
  return (
    <div className='sidebarfeed'>
      <div className="sidebarfeed-wrapper">
      <div className="sidebarfeed-header">
        <button className='sidebarfeed-button'><span className='material-icons'>whatshot</span> Trending</button>
        <button className='sidebarfeed-button'><span className='material-icons'>date_range</span>Latest</button>
      </div>
      <div className="sidebarfeed-body">
        <div>
          <h3>Who to follow?</h3>
        </div>
        <UserSuggestion username={"Jenny"} usertag={"@jenny123"}/>
        <UserSuggestion username={"Joe"} usertag={"@joeRog"}/>
        <UserSuggestion username={"Jenny"} usertag={"@jenny123"}/>
        <UserSuggestion username={"Joe"} usertag={"@joeRog"}/>
        <UserSuggestion username={"Jenny"} usertag={"@jenny123"}/>
      </div>
      </div>
    </div>
  )
}
