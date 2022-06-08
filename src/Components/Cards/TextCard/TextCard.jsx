import "./TextCard.css";
import React, { useState } from "react";
import { CommentsTab } from "./component/CommentsTab";
import { useDispatch, useSelector } from "react-redux";
import { dislikePost, likePost, editPost, deletePost} from "../../../store/postSlice";

export const TextCard = ({
  hasImage,
  username,
  content,
  date,
  postId,
  comments,
  likes
}) => {
  const [clicked, setClicked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [editPostClick, setEditPostClick]= useState(false)
  const [more, setMore] = useState(false)
  const [textContent, setTextContent] = useState({content:content})
  const {token, user} = useSelector((store)=>store.authenticate)
  const dispatch = useDispatch();


  const likedHandler =()=>{
    if(liked){
      dispatch(dislikePost({postId: postId, encodedToken: token}))
      setLiked((prev)=>!prev)
    }else{
      dispatch(likePost({postId: postId, encodedToken: token}))
      setLiked((prev)=>!prev)
    }
    
  }

  const editPostHandler = ()=>{
    setEditPostClick((prev)=>!prev)
    dispatch(editPost({postId:postId, postData: textContent, encodedToken:token }))
  }

  return (
    <div>
      {" "}
      <div className="text-post-card">
        <div className="text-post-header-wrap">
          <div className="post-header">
            <div className="avatar-round wd-50 ht-50"></div>
            <div className="username-tag-post">
              <small>{username}</small>
              <small>@{username}</small>
            </div>
            <div className="date-posted">
              <small>{date}</small>
            </div>
          </div>
          {
            user.username === username &&
            <div>
            <span onClick = {()=> setMore((prev)=>!prev)} className="material-icons edit-delete-icon">more_vert</span>
            {
              more &&
            <div className="dropdown">
              <span onClick={()=>{setEditPostClick((prev)=>!prev); setMore((prev)=>!prev)}} className="dropdown-child">edit</span>
              <div className="border"></div>
              <span onClick={()=>dispatch(deletePost({postId:postId, encodedToken: token}))} className="dropdown-child">delete</span>
            </div>
            }
           
            
          </div>
          }
        
        </div>
        <div className="post-content">
          {user.username===username &&
            <div>
              {
            editPostClick && 
            <div>
            <textarea className="edit-delete-post" value={textContent.content} onChange={(e)=>setTextContent({content: e.target.value})}></textarea>
            <button onClick={editPostHandler} className="cta-btn">ok</button>
            </div>
          }
          {
            !editPostClick && <span>{content}</span>
          }
            </div>
          }
          {user.username!==username &&
            <span>{content}</span>
          }
          
          
        </div>
        {hasImage && <div className="post-image"></div>}

        <div className="post-footer">
          <div className="post-footer-child-left">
            {
              !liked && <span onClick={likedHandler} className="material-icons post-footer-icons">
              favorite_border
            </span>
            
            }
            {
              liked && <span onClick={likedHandler} className="material-icons post-footer-icons">
              favorite
            </span>
            }
            {
              likes.likeCount>0 && <span>{likes.likeCount}</span>
            }
            
            <span
              onClick={() => setClicked((prev) => !prev)}
              className="material-icons post-footer-icons"
            >
              chat_bubble_outline
            </span>
            {clicked && (
              <CommentsTab
                comments={comments}
                setClicked={setClicked}
                postId={postId}
              />
            )}
            <span className="material-icons post-footer-icons">
              bookmark_border
            </span>
          </div>
        </div>
        <div>
          {comments && (
            <div>
              <div>
                {comments[0]?.username && (
                  <div className="comment-tab">
                    <div className="avatar-round ht-20 wd-20"></div>
                    <div className="flex-column">
                      {comments[0]?.username}
                      <small> {`@${comments[0]?.username}`}</small>
                    </div>
                  </div>
                )}
              </div>
              <small>{comments[0]?.text?.content}</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
