import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <Link to="/" className="active">
        Home
      </Link>
      <Link to="/subscribe">Subscribe</Link>
    </div>
  );
};

export default Navbar;
