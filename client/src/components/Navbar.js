import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <Link to="/" className="active">
        MB
      </Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/about">About</Link>
      <Link to="javascript:void(0);" className="icon" onclick="myFunction()">
        <i className="fa fa-bars"></i>
      </Link>
    </div>
  );
};

export default Navbar;
