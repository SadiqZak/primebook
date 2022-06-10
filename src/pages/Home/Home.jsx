import React, { useEffect, useState } from "react";
import { TextCard } from "../../Components/Cards/TextCard/TextCard";
import { FeedWall } from "../../Components/FeedWall/FeedWall";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/postSlice";
import { filterData } from "../../backend/utils/filter";
import { SidebarFeed } from '../../Components/SidebarFeed/SidebarFeed';

export const Home = () => {
  const {user} = useSelector((store)=>store.authenticate)
  const {users} = useSelector((store)=>store.users)
  // const [displayList, setDisplayList] = useState([user.username])
  const {posts, sortSelectState}= useSelector((store)=>store.timeline)
  const dispatch = useDispatch()
  
  const currFollowing = users.filter((feeduser)=>feeduser.username===user.username)
  let currFollowingList = currFollowing[0]?.following.map((user)=>user.username)
  let finalList =[]
  if(currFollowingList){
    finalList = [...currFollowingList, user.username]
  }else{
    finalList = [user.username]
  } 

  console.log(users)

  useEffect(()=>{
    dispatch(getAllPosts())
  },[])

let newPosts = [...posts]
const feedData = filterData(newPosts, sortSelectState)

  return (
    <div className="flex">
       <div className="middle-container">
          <div className="middle-child">
            <FeedWall />
            {feedData?.map((post)=>(
                  finalList.map((user)=>(
                    post.username === user &&
                    <TextCard key={post._id} firstName={post.firstName} lastName={post.lastName} likes={post.likes} postId={post._id} comments={post.comments} username={post.username} content={post.content} date={post.createdAt}/>
                  ))
            ))}
          </div>
      </div>
      <SidebarFeed/>
    </div>
   
  );
};
