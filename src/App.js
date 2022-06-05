import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';

import {Home} from './pages/Home'; 
import { SidebarFeed } from './Components/SidebarFeed/SidebarFeed';

import Mockman from "mockman-js";

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
        <Route path="/explore" element={"explore"}/>
        <Route path="/favorite" element={"Liked Posts"}/>
        <Route path="/bookmark" element={"Bookmarks"}/>
      </Routes>
      <SidebarFeed/>
      </div>
      
    </div>
  );
}

export default App;
