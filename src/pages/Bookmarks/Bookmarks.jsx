import React from 'react'
import { useSelector } from 'react-redux'
import '../Explore/Explore.css'
import {TextCard} from '../../Components/Cards/TextCard/TextCard'

export const Bookmarks = () => {
  const {currUserBookmark} = useSelector((store)=>store.users)

  return (
    <div className='middle-container'>
      <div className="middle-child">
        <div className="middle-child-wrapper">
          {
            currUserBookmark[0]?.bookmarks.map((post)=>(
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
  )
}
