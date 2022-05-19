import { useContext } from "react";
import { Link } from "react-router-dom";
// import { CardContext } from "../../../utils/card-context";

const SidebarChild = ({ icon, comp, path }) => {
  // const {state, dispatch} = useContext(CardContext) onClick={()=>{dispatch({type:`${comp}`})}} ${state.sidebarState===`${comp}` && "selected"}
  return (
    <>
      {/* <Link  className="link-tag" to={`${path}`}></Link> */}
        <div className={`sidebar-child `}>
          <span className="material-icons">{icon}</span>
          <div>{comp}</div>
        </div>
      
    </>
  );
};

export default SidebarChild;
