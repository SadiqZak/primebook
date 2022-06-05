import SidebarChild from "./SidebarChild/SidebarChild";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-wrap">
          <SidebarChild path={"/"} icon={"home"} comp={"Home"} />
          <SidebarChild path={"/explore"} icon={"explore"} comp={"Explore"} />
          <SidebarChild path={"/favorite"} icon={"favorite"} comp={"Liked Posts"} />
          <SidebarChild path={"/bookmark"} icon={"bookmark"} comp={"Bookmarks"} />
          <SidebarChild path={"/profile"} icon={"person"} comp={"Profile"} />
          <button className="cta-btn sidebar-btn">Post</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

// 