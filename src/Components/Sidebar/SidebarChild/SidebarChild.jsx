import { Link } from "react-router-dom";

const SidebarChild = ({ icon, comp, path }) => {
  return (
    <>
      <Link className="link-tag" to={`${path}`}  >
        <div className={`sidebar-child`}>
            <span className="material-icons">{icon}</span>
            <div>{comp}</div>
          </div>
      </Link>
        
      
    </>
  );
};

export default SidebarChild;
