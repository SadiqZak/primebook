import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TextCard } from '../../Components/Cards/TextCard/TextCard'
import { getUserPosts, getUserProfile } from '../../store/profileSlice'
import { ProfileChild } from './Component/ProfileChild'
import "./Profile.css"
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

export const Profile = () => {
    const {userPosts, userProfile} = useSelector((store)=>store.profile)
    const {users} = useSelector((store)=>store.users)
    const {currentUser} = useSelector((store)=>store.users)
    const feedData = [...userPosts]
    const dispatch =useDispatch()

    useEffect(()=>{
      dispatch(getUserPosts({username:`${currentUser}`}))
      dispatch(getUserProfile({username:`${currentUser}`}))
    }, [])

  return (
    <div className="App">
    <Header/>
    <div className='App-body'>
      <Sidebar/>
    <div className='middle-container'>
        <div className='middle-child'>
          <ProfileChild userProfile={userProfile}/>
          {/* {userProfile.username} */}

        {/* user post */}
        {feedData?.map((post)=>(
           <TextCard key={post._id} firstName={post.firstName} lastName={post.lastName} likes={post.likes} postId={post._id} comments={post.comments} username={post.username} content={post.content} date={post.createdAt}/>
        ))}
        </div>
    </div>
    </div>
    </div>
  )
}
