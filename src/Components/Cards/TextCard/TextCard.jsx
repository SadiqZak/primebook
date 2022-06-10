import "./TextCard.css";
import React, { useState } from "react";
import { CommentsTab } from "./component/CommentsTab";
import { useDispatch, useSelector } from "react-redux";
import { dislikePost, likePost } from "../../../store/postSlice";

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
  const {token} = useSelector((store)=>store.authenticate)
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
          <div>
            <span className="material-icons">more_vert</span>
          </div>
        </div>
        <div className="post-content">
          <span>{content}</span>
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
                  <div className="flex">
                    <div className="avatar-round ht-35 wd-35"></div>
                    <div className="flex-column">
                      {comments[0]?.username}
                      <small> {`@${comments[0]?.username}`}</small>
                    </div>
                  </div>
                )}
              </div>
              <div>{comments[0]?.text?.content}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
