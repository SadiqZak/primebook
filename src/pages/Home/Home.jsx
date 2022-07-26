import React, { useEffect, useState } from "react";
import { TextCard } from "../../Components/Cards/TextCard/TextCard";
import { FeedWall } from "../../Components/FeedWall/FeedWall";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/postSlice";
import { filterData } from "../../backend/utils/filter";
import { SidebarFeed } from "../../Components/SidebarFeed/SidebarFeed";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { user } = useSelector((store) => store.authenticate);
  const { users } = useSelector((store) => store.users);
  const { posts, sortSelectState } = useSelector((store) => store.timeline);
  const [filteredDataPosts, setFilteredDataPosts] = useState([])
  const [sidebarState, setSidebarState] = useState("Home");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    navigate("/");
    dispatch(getAllPosts());
  }, []);

  // const findUser = (arr) => {
  //   return arr.length !== 0
  //     ? arr.find((userCheck) => userCheck.username === user.username)?.following
  //     : [];
  // };

  useEffect(()=>{
    const filteredPosts = posts.filter((postItem)=>
    user.following.find((user) => user.username === postItem.username) ||
    user.username === postItem.username,
  )
  setFilteredDataPosts(filteredPosts)
  },[user, posts])
 
  // let newPosts = [...posts];
  // const feedData = filterData(newPosts, sortSelectState);
  const feedData = filterData(filteredDataPosts, sortSelectState)

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Sidebar
          sidebarState={sidebarState}
          setSidebarState={setSidebarState}
        />
        <div className="flex">
          <div className="middle-container">
            <div className="middle-child">
              <FeedWall />
              {/* {feedData?.map((post) =>
                finalList.map(
                  (listItem) =>
                    listItem.username === post.username && (
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
                    )
                )
              )} */}
              {feedData.length!==0 ? feedData.map((post) =>
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
              ): <>No Posts yet</>}
            </div>
          </div>
          <SidebarFeed />
        </div>
      </div>
    </div>
  );
};
