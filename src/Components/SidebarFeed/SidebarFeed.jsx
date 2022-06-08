import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserSuggestion } from '../UserSuggestion/UserSuggestion';
import {changeSorting} from '../../store/postSlice'
import "./SidebarFeed.css";

export const SidebarFeed = () => {
  const {sortSelectState} = useSelector((store)=>store.timeline)
  const dispatch = useDispatch()

  return (
    <div className='sidebarfeed'>
      <div className="sidebarfeed-wrapper">
      <div className="sidebarfeed-header">
        <button onClick={()=>dispatch(changeSorting("Trending"))} className={`sidebarfeed-button ${sortSelectState === "Trending" && `selected`}`}><span className='material-icons'>whatshot</span> Trending</button>
        <button onClick={()=>dispatch(changeSorting("Latest"))} className={`sidebarfeed-button ${sortSelectState === "Latest" && `selected`}`}><span className='material-icons'>date_range</span>Latest</button>
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
