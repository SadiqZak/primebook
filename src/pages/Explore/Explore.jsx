import React from "react";
import { filterData } from "../../backend/utils/filter";
import { useSelector } from "react-redux/es/exports";
import { TextCard } from "../../Components/Cards/TextCard/TextCard";
import './Explore.css'

export const Explore = () => {
  const {posts, sortSelectState}= useSelector((store)=>store.timeline)
  let newPosts = [...posts]
  const feedData = filterData(newPosts, sortSelectState)

  return (
    <div className="middle-container">
      <div className="middle-child">
        <div className="middle-child-wrapper">
        {feedData?.map((post) => (
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
        ))}
        </div>
        
      </div>
    </div>
  );
};
