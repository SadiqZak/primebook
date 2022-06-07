import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarChild = ({ icon, comp, path, sidebarState, setSidebarState }) => {

  return (
    <>
      <Link className="link-tag" onClick={()=>setSidebarState(comp)} to={`${path}`}  >
        <div className={`sidebar-child ${sidebarState===`${comp}` && "selected"}`}>
            <span className="material-icons">{icon}</span>
            <div>{comp}</div>
          </div>
      </Link>
        
      
    </>
  );
};

export default SidebarChild;
