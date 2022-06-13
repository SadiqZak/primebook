import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserSuggestion } from '../UserSuggestion/UserSuggestion';
import {changeSorting} from '../../store/postSlice'
import "./SidebarFeed.css";
import { getAllUserService } from '../../services/userService';
import { getAllUsers } from '../../store/userSlice';

export const SidebarFeed = () => {
  const {sortSelectState} = useSelector((store)=>store.timeline)
  const {user} = useSelector((store)=>store.authenticate)
  const {users} = useSelector((store)=>store.users)
  const {userProfile} = useSelector((store)=>store.profile)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllUsers())
  },[])

  const feedData = [...users]

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
        {feedData.map((feedDataUser)=>(
          user?.username !== feedDataUser.username &&
          <div key={feedDataUser._id}>
             {
            feedDataUser.followers[0]?.username !== user?.username &&
            <UserSuggestion key={feedDataUser._id} userId={feedDataUser._id} username={feedDataUser.username} usertag={`@${feedDataUser.username}`}/>
            }
          </div>
         
          
        ))}
        
      </div>
      </div>
    </div>
  )
}
