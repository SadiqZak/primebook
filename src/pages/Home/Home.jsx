import React, { useEffect } from "react";
import { TextCard } from "../../Components/Cards/TextCard/TextCard";
import { FeedWall } from "../../Components/FeedWall/FeedWall";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/postSlice";
import { filterData } from "../../backend/utils/filter";

export const Home = () => {

  const posts= useSelector((store)=>store.timeline.posts)
  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(getAllPosts())
  },[])

let newPosts = [...posts]
const feedData = filterData(newPosts, "Latest")


  return (
    <div className="middle-container">
      <div className="middle-child">
        <FeedWall />
        {feedData?.map((post)=>(
          <TextCard key={post._id} postId={post._id} comments={post.comments} username={post.username} content={post.content} date={post.createdAt}/>
        ))}
      </div>
    </div>
  );
};
