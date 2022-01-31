import React from "react";
import headPhoto from "../img/headshot.png";
import Block from "../components/Block";

const Home = () => {
  return (
    <div className="home-container">
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
              <div className="block-container">
                {/* <Block />
                <Block />
                <Block />
                <Block /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr className="dashed-divider-top"></hr>
      <div className="homepage-paragraph">
        <h2>How the coding journey began...</h2>
        <br />I am from Davis, CA and lived in Santa Barbara and San Jose for
        college. Now currently in Sacramento as a full-time dev! I have an older
        sister, step-brother and a 5 year old dog, Atlas. As more of an
        independent person, I enjoy food, music, exercising, traveling, sports,
        and growing as an adult everyday. Summer of 2017, after a road-trip to
        Kentucky while visiting friends with a buddy of mine, that's when I was
        inspired to finally commit my life to computer programming and web
        development. I have always carried a nerdy side to me, always craving
        the latest tech - beginning with Gameboy's and Gamecube's since the
        90's. None of my schools taught any coding while growing up. And true
        enough, it was never in my hearts passion throughout my early twenties.
        But now, one day, I would love to engineer for something upcoming and
        unique like the blockchain industry to help expand its potential
        revolutionary uses. Programming for the sports industry is my other
        dream as well. I'm 30, haven't been taking life for granted for a some
        time now, and today is the first day of the rest of my life. The journey
        feels perfect because I feel I can accomplish anything after
        understanding coding and how the internet works.
      </div>
      <br />
      <hr className="dashed-divider-bottom"></hr>
      <div className="lower-homepage">hi</div>
    </div>
  );
};

export default Home;
