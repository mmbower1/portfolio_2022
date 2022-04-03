import React from "react";
// import resume from "../img/resume";
import CardList from "../components/Card";
import Register from "../components/Register";

const Subscribe = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="landing-inner">
            <h1 className="x-large">Subscribe to my Youtube 'MB Tutorials'!</h1>
            <Register />
            <CardList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
