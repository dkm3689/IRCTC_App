import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { loggedInUser, logout, login } = useContext(AuthContext);

  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <>
      {/* <div>Navbar</div> */}

      <nav className="navbar">
        <h2 className="logo"> IRCTC </h2>

        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>

          {loggedInUser && (
            <>
             <li>
                <Link to="/history"> History </Link>
              </li>
              <li>
                <Link onClick={() => handleLogout()}> Logout </Link>
              </li>
             
            </>
          )}

          {!loggedInUser && (
            <>
              <li>
                <Link to="/login" > Login </Link>
              </li>
              <li>
                <Link to="/register"> Register </Link>
              </li>
            </>
          )}

        </ul>

        {/* <div className="navlinks">
          <span> Home </span>
          <span> Login </span>
          <span> Register </span>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;