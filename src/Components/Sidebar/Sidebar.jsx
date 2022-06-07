import SidebarChild from "./SidebarChild/SidebarChild";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [sidebarState, setSidebarState] = useState("Home")
  const navigate = useNavigate()

  useEffect(()=>{
    setSidebarState("Home")
    navigate("/")
  },[])
  
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-wrap">
          <SidebarChild path={"/"} icon={"home"} comp={"Home"} sidebarState={sidebarState} setSidebarState={setSidebarState}/>
          <SidebarChild path={"/explore"} icon={"explore"} comp={"Explore"} sidebarState={sidebarState} setSidebarState={setSidebarState}/>
          <SidebarChild path={"/favorite"} icon={"favorite"} comp={"Liked Posts"}sidebarState={sidebarState} setSidebarState={setSidebarState} />
          <SidebarChild path={"/bookmark"} icon={"bookmark"} comp={"Bookmarks"} sidebarState={sidebarState} setSidebarState={setSidebarState}/>
          <SidebarChild path={"/profile"} icon={"person"} comp={"Profile"} sidebarState={sidebarState} setSidebarState={setSidebarState}/>
          <button className="cta-btn sidebar-btn">Post</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

// 