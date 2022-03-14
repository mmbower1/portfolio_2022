import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <Link to="/" className="active">
        MB
      </Link>
      <Link to="/resume">Resume</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
