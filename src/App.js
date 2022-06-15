import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';

import {Home} from './pages/Home/Home'; 
import {Login} from './pages/Login/Login'
// import { SidebarFeed } from './Components/SidebarFeed/SidebarFeed';
import {Profile} from './pages/Profile/Profile'

import Mockman from "mockman-js";
import { Explore } from './pages/Explore/Explore';
import { LikedPosts } from './pages/LikedPosts/LikedPosts';
import { Bookmarks } from './pages/Bookmarks/Bookmarks';
import { useSelector } from 'react-redux';

function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  const {token} = useSelector((store)=>store.authenticate)
  return (
    <>
      <Routes>
        <Route path="/" element={token ? <Home/>: <Login/>}/>
        <Route path="/explore" element={token ? <Explore/>: <Login/>}/>
        <Route path="/favorite" element={token ?<LikedPosts/> : <Login/>}/>
        <Route path="/bookmark" element={token ?<Bookmarks/> : <Login/>}/>
        <Route path="/profile" element = {token ? <Profile/> : <Login/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/mockman" element = {<Mockman/>}/>
      </Routes>     
    </>
  );
}

export default App;
