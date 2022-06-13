import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TextCard } from '../../Components/Cards/TextCard/TextCard'
import { getUserPosts, getUserProfile } from '../../store/profileSlice'
import { ProfileChild } from './Component/ProfileChild'
import "./Profile.css"

export const Profile = () => {
    const {userPosts, userProfile} = useSelector((store)=>store.profile)
    const {username} = useParams()
    const feedData = [...userPosts]
    const dispatch =useDispatch()

    useEffect(()=>{
      dispatch(getUserPosts({username:"adarshbalika"}))
      dispatch(getUserProfile({username:"adarshbalika"}))
    }, [username, userProfile])

  return (
    <div className='middle-container'>
        <div className='middle-child'>
          <ProfileChild userProfile={userProfile}/>
          {/* {userProfile.username} */}

        {/* user post */}
        {feedData?.map((post)=>(
           <TextCard key={post._id} likes={post.likes} postId={post._id} comments={post.comments} username={post.username} content={post.content} date={post.createdAt}/>
        ))}
        </div>
    </div>
  )
}
