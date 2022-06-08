import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextCard } from '../../Components/Cards/TextCard/TextCard'
import { getUserPosts } from '../../store/profileSlice'
import { ProfileChild } from './Component/ProfileChild'
import "./Profile.css"

export const Profile = () => {
    const {posts, userProfile} = useSelector((store)=>store.profile)
    const {token} = useSelector((store)=>store.authenticate)
    const feedData = [...posts]
    const dispatch =useDispatch()

    // console.log(userProfile[0]._id)

  return (
    <div className='middle-container'>
        <div className='middle-child'>
          <ProfileChild userProfile={userProfile}/>

        {/* user post */}
        {feedData?.map((post)=>(
          <TextCard key={post._id} likes={post.likes} postId={post._id} comments={post.comments} username={post.username} content={post.content} date={post.createdAt}/>
        ))}
        </div>
    </div>
  )
}
