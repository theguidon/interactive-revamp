import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import logo from "./../../assets/images/logos/interactive-longform.svg";
import icon_facebook from "./../../assets/images/icons/facebook.svg";
import icon_twitter from "./../../assets/images/icons/twitter.svg";
import icon_instagram from "./../../assets/images/icons/instagram.svg";
import icon_youtube from "./../../assets/images/icons/youtube.svg";
import icon_spotify from "./../../assets/images/icons/spotify.svg";

function Footer() {
  return (
    <footer>
      <div className="general-container">
        <div className="content">
          <div className="logo-desc">
            <Link to="/" className="logo-container">
              <img className="logo" src={logo} />
            </Link>

            <p className="desc">
              The GUIDON’s interactive articles are an innovation in
              storytelling, providing readers with an experience that goes
              beyond just traditional text and images through the use of modern
              web technologies.
            </p>
          </div>

          <div className="more">
            <p className="heading">
              More from <span className="nowrap">The GUIDON</span>
            </p>
            <Link to="https://theguidon.com" target="_blank">
              <span className="nowrap">The GUIDON</span> Main
            </Link>
            <Link to="https://archives.theguidon.com" target="_blank">
              <span className="nowrap">The GUIDON</span> Archives
            </Link>
            <Link to="https://vantage.theguidon.com" target="_blank">
              Vantage Magazine
            </Link>
          </div>

          <div className="newsletter-group">
            <p className="subscribe">Subscribe to our newsletter</p>
            <form id="subscribe-form">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 5.05L14 12.75C14 13.2628 13.614 13.6855 13.1166 13.7433L13 13.75H3.00001C2.48718 13.75 2.06451 13.364 2.00674 12.8666L2.00001 12.75L2 5.05L7.34151 9.50259C7.71853 9.83249 8.28149 9.83249 8.65852 9.50259L14 5.05ZM12.433 3.75L8.00001 7.42125L3.566 3.75H12.433Z"
                  fill="white"
                />
              </svg>

              <input name="email" type="text" placeholder="Email Address" />

              <input type="submit" value="Subscribe" />
            </form>
            <div className="social-links">
              <Link to="https://facebook.com/TheGUIDON" target="_blank">
                <img src={icon_facebook} alt="Facebook" />
              </Link>
              <Link to="https://x.com/TheGUIDON" target="_blank">
                <img src={icon_twitter} alt="Twitter" />
              </Link>
              <Link to="https://www.instagram.com/theguidon" target="_blank">
                <img src={icon_instagram} alt="Instagram" />
              </Link>
              <Link to="https://www.youtube.com/@TheGuidon" target="_blank">
                <img src={icon_youtube} alt="YouTube" />
              </Link>
              <Link
                to="https://open.spotify.com/show/0t2PxYpSft6HfoPHibwAvT"
                target="_blank"
              >
                <img src={icon_spotify} alt="Spotify" />
              </Link>
            </div>
          </div>
        </div>

        <div className="credits">
          &copy; The GUIDON 2024 All rights reserved. Designed and developed by
          the Digital Development staff 2023–2024.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
