import React, {useState} from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

export const LikedPosts = () => {
  const [sidebarState, setSidebarState] = useState("Liked Posts")
  return (
    <div className="App">
        <Header/>
        <div className='App-body'>
        <Sidebar  sidebarState={sidebarState} setSidebarState={setSidebarState}/>
    <div className='middle-container'>...LikedPosts</div>
    </div>
    </div>
  )
}
