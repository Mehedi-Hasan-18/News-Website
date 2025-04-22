import profile from "../assets/user.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=" "></div>
      <div className="nav space-x-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <div>
            <img src={profile} alt="" />
          </div>
          <button className="btn rounded-none">Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
