import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="#">MB Tutorials</Link>
              </li>
              <li>
                <Link to="#">Fiverr</Link>
              </li>
              <li>
                <Link to="#">Craigslist</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Socials</h4>
            <ul>
              <li>
                <Link to="#">
                  <i className="fab fa-github"></i> Github
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-linkedin"></i> Linkedin
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-youtube"></i> Youtube
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-twitter"></i> Twitter
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-twitch"></i> Twitch
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Subscribe</h4>
            <form>form</form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
