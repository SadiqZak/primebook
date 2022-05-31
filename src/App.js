import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';

import {Home} from './pages/Home';

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
      </div>
      
    </div>
  );
}

export default App;
