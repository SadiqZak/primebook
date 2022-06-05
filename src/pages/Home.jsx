import React, { useEffect } from "react";
import { TextCard } from "../Components/Cards/TextCard/TextCard";
import { FeedWall } from "../Components/FeedWall/FeedWall";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../store/postSlice";

export const Home = () => {

  const {posts}= useSelector((store)=>store.timeline)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllPosts())
  },[])

  return (
    <div className="middle-container">
      <div className="middle-child">
        <FeedWall />
        {posts.map((post)=>(
          <TextCard key={post.id} username={post.username} content={post.content} date={post.createdAt}/>
        ))}
      </div>
    </div>
  );
};
