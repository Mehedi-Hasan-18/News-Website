import { useContext } from "react";
import profile from "../assets/user.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
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
            {
              user && user?.email? <div><img src={ user.photoURL} ></img> </div>:<img src={profile} alt="" />
            }
          </div>
          {user ? (
            <Link onClick={logOut} className="btn rounded-none">
              Log Out
            </Link>
          ) : (
            <Link to="/auth/login" className="btn rounded-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
