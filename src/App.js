import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';

import {Home} from './pages/Home/Home'; 
import {Login} from './pages/Login/Login'
import { SidebarFeed } from './Components/SidebarFeed/SidebarFeed';
import {Profile} from './pages/Profile/Profile'

import Mockman from "mockman-js";
import { Explore } from './pages/Explore/Explore';
import { LikedPosts } from './pages/LikedPosts/LikedPosts';
import { Bookmarks } from './pages/Bookmarks/Bookmarks';

function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='App-body'>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/favorite" element={<LikedPosts/>}/>
        <Route path="/bookmark" element={<Bookmarks/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/mockman" element = {<Mockman/>}/>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
