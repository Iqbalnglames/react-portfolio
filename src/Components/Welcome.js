import { useState } from "react";
import { Link } from "react-router-dom";
const Welcome = () => {
  const [ShowMenus, setShowMenu] = useState();
  const ShowMenu = () => {
    setShowMenu(!ShowMenus);
  };
  return (
    <div className="text-white">
      {!ShowMenus ? (
        <div>
          <h1>Welcome To My Portfolio</h1>
          <Link onClick={ShowMenu}>know more about me</Link>
        </div>
      ) : (
        <div>
          <h1>Let Me Navigate You to Our Portfolio</h1>
          <Link to={"profile"}>My Profile</Link>
          <Link to={"skills"}>My Skills</Link>
          <Link to={"/"}>Address</Link>          
          <Link onClick={ShowMenu}>Back</Link>          
        </div>
      )}
    </div>
  );
};
export default Welcome;
