import { useContext } from "react";
import { Link } from "react-router-dom";
// import { CardContext } from "../../../utils/card-context";


const Logo = () => {
  // const {dispatch}=useContext(CardContext) nClick={()=>dispatch({type:"Home"})}
  return (
    // <Link o className="link-tag" to={`/`}></Link>
      <div className="logo">
        <span  className="logo-icon material-icons">connect_without_contact</span> PrimeBook
      </div>
    
  );
};

export default Logo;
