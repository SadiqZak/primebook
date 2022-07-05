import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { TextCard } from '../../Components/Cards/TextCard/TextCard'

export const LikedPosts = () => {
  const [sidebarState, setSidebarState] = useState("Liked Posts")
  const {user}= useSelector((store)=>store.authenticate)
  const {posts} = useSelector((store)=>store.timeline)
  
  let feedPosts = posts.filter((post)=>post.likes.likedBy.find((liked)=>liked.username===user.username)?.username===user.username)
  return (
    <div className="App">
        <Header/>
        <div className='App-body'>
        <Sidebar  sidebarState={sidebarState} setSidebarState={setSidebarState}/>
        <div className='middle-container'>
      <div className="middle-child">
        <div className="middle-child-wrapper">
          {
            feedPosts.map((post)=>(
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
          }
       
      
        </div>
        
      </div>
    </div>
    </div>
    </div>
  )
}
