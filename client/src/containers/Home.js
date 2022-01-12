import React from "react";
import headPhoto from "../img/headshot.png";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="dark-overlay">
            <div className="landing-inner">
              <img src={headPhoto} alt="head-photo" className="head-photo" />
              <h1 className="x-large">Matthew Michael Chapman Bower</h1>
              <p className="lead">
                Full-Stack (MERN) Engineer, Content-Creator, Investor, and
                Entrepreneur based in Northern California.
              </p>
              <div className="buttons">
                <a href="register.html" className="btn btn-primary">
                  Sign Up
                </a>
                <a href="login.html" className="btn btn-light">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-paragraph">
        I am from Davis, California and lived in Santa Barbara and San Jose for
        college. Now currently Sacramento as a full-time dev! I have an older
        sister, step-brother and a 3 year old dog, Atlas. As more of an
        independent person, I enjoy food, music, exercising, traveling, sports,
        and growing as a person everyday. Summer of 2017, after a road-trip to
        Kentucky while visiting friends with a buddy of mine, that's when I was
        inspired to finally commit my life to computer programming and web
        development. I have always carried a nerdy side to me, always craving
        the latest tech - beginning with Gameboy's and Gamecube's since the
        90's. None of my schools taught any coding while growing up. And true
        enough, it was never in my hearts passion throughout my early twenties.
        But now, one day, I would love to engineer for something upcoming and
        unique like the blockchain industry to help expand its potential
        revolutionary uses. Programming for the sports industry is my other
        dream as well. I'm 29, haven't been taking life for granted for a some
        time now, and today is the first day of the rest of my life. The journey
        feels perfect because I feel I can accomplish anything after
        understanding coding and how the internet works.
      </div>
    </div>
  );
};

export default Home;
