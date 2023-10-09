import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const navLinks = <>
<li className="text-lg text-lime-500"><NavLink to={"/"}>Home</NavLink></li>
<li className="text-lg text-lime-500"><NavLink to={"/about"}>About</NavLink></li>
<li className="text-lg text-lime-500"><NavLink to={"/event"}>Events</NavLink></li>


</>

const Navbar = () => {



  const {user,logOut} = useContext(AuthContext)
const handleLogOut = () => {
  logOut()
  .then()
  .catch()
}
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
{
  navLinks
}

      </ul>
    </div>
    <div className="flex items-center">
      <img className="w-20" src={'https://i.ibb.co/4mSx1rj/logo.jpg '} alt="" />
    <a className="btn text-lime-500 btn-ghost normal-case text-2xl"> E&T Events</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
{navLinks}
      
    </ul>
  </div>
  <div className="navbar-end">

  {user ? (
          <div className="flex items-center space-x-2">
            <img
              src={user.photoURL} 
              alt={user.displayName}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-lg">{user.email}</span>
            <button onClick={handleLogOut} className="btn text-lg text-lime-500">
              Logout
            </button>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="btn text-lime-500 text-lg">Login</button>
          </Link>
        )}
    
  </div>
</div>
  );
};

export default Navbar;