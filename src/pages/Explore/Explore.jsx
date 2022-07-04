import React, {useState, useEffect} from "react";
import { filterData } from "../../backend/utils/filter";
import { useSelector } from "react-redux/es/exports";
import { TextCard } from "../../Components/Cards/TextCard/TextCard";
import { useDispatch } from "react-redux";
import './Explore.css'
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { getAllPosts } from "../../store/postSlice";

export const Explore = () => {
  const {posts, sortSelectState}= useSelector((store)=>store.timeline)
  let newPosts = [...posts]
  const [sidebarState, setSidebarState] = useState("Explore")
  const feedData = filterData(newPosts, sortSelectState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getAllPosts())
    navigate("/explore")
  },[dispatch])

  return (
    <div className="App">
       <Header/>
       <div className='App-body'>
        <Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState}/>
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
    </div>
    </div>
  );
};
