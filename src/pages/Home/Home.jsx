import React, { useEffect } from "react";
import { TextCard } from "../../Components/Cards/TextCard/TextCard";
import { FeedWall } from "../../Components/FeedWall/FeedWall";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/postSlice";
import { filterData } from "../../backend/utils/filter";

export const Home = () => {

  const {posts, sortSelectState}= useSelector((store)=>store.timeline)
  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(getAllPosts())
  },[])

let newPosts = [...posts]
const feedData = filterData(newPosts, sortSelectState)

  return (
    <div className="middle-container">
      <div className="middle-child">
        <FeedWall />
        {feedData?.map((post)=>(
          <TextCard key={post._id} likes={post.likes} postId={post._id} comments={post.comments} username={post.username} content={post.content} date={post.createdAt}/>
        ))}
      </div>
    </div>
  );
};
