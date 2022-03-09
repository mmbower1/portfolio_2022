import React from "react";

const Footer = () => {
  return (
    <div class="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">MB Tutorials</a>
              </li>
              <li>
                <a href="#">Fiverr</a>
              </li>
              <li>
                <a href="#">Craigslist</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Socials</h4>
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-github"></i> Github
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i> Linkedin
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"></i> Youtube
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitch"></i> Twitch
                </a>
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
