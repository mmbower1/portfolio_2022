import React from "react";
// import resume from "../img/resume";
import CardList from "../components/CardList";
import Register from "../components/Register";
// utils
import youtubePhoto from "../img/youtubePhoto.png";

const Subscribe = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="landing-inner" id="landing-inner-register">
            <img src={youtubePhoto} alt="head-pic" className="head-photo" />
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
