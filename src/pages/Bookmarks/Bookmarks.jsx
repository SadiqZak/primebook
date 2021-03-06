import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Explore/Explore.css'
import {TextCard} from '../../Components/Cards/TextCard/TextCard'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

export const Bookmarks = () => {
  const {user} = useSelector((store)=>store.authenticate)
  const {posts} = useSelector((store)=>store.timeline)
  const [sidebarState, setSidebarState] = useState("Bookmarks")
  const navigate = useNavigate()

  useEffect(()=>{
    navigate("/bookmark")
  },[])

  let newPosts = [...posts]
  const getBookmarkedPosts = (postId) => newPosts.filter((newPostId)=> newPostId._id === postId)


  return (
    <div className="App">
    <Header/>
    <div className='App-body'>
     <Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState}/>
    <div className='middle-container'>
      <div className="middle-child">
        <div className="middle-child-wrapper">
          {
            user.bookmarks.map((postId)=>(
              getBookmarkedPosts(postId).map((post)=>(
                <TextCard
                key={post._id}
                firstName={post.firstName}
                lastName={post.lastName}
                likes={post.likes}
                postId={post._id}
                comments={post.comments}
                username={post.username}
                content={post.content}
                date={post.createdAt}
          />
              ))
             
            ))
          }
       
      
        </div>
        
      </div>
    </div>
    </div>
    </div>
  )
}
