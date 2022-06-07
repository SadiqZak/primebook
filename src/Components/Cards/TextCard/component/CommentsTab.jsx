import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addComment } from '../../../../store/postSlice'
import './CommentsTab.css'

export const CommentsTab = ({postId, setClicked}) => {
    const [commentData, setCommentData]= useState({content:""})
    const { token } = useSelector((store) => store.authenticate);
    const dispatch = useDispatch()
    // console.log("ID",postId)

    const clickHandler = ()=>{
        setClicked((prev)=>!prev)
        dispatch(addComment({postId:postId, commentData:commentData, encodedToken:token}))
    }
  return (
    <div >
      <div className='comments-container'>
        <textarea className="comment-area" value={commentData.content} onChange={(e)=>setCommentData({content:e.target.value})} name="comment" id="comment" cols="30" rows="10" placeholder='Write something...'></textarea>
        <button onClick={clickHandler} className='comment-btn'>Post</button>
      </div>
  </div>
  )
}
