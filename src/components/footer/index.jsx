import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import logo from "./../../assets/images/logos/interactive-longform.svg";

function Footer() {
  return (
    <footer>
      <div className="general-container">
        <div className="content">
          <div className="logo-desc">
            <img
              src={logo}
            />

            <p className="desc">
              The GUIDON’s interactive articles are an innovation in storytelling, providing readers with an experience that goes beyond just traditional text and images through the use of modern web technologies.
            </p>
          </div>

          <div className="more">
            <p className="heading">More from The GUIDON</p>
            <Link to="https://theguidon.com" target="_blank">The GUIDON Main</Link>
            <Link to="https://archives.theguidon.com" target="_blank">The GUIDON Archives</Link>
            <Link to="https://vantage.theguidon.com" target="_blank">Vantage Magazine</Link>
          </div>

          <div className="newsletter-group">
          </div>
        </div>

        <div className="credits">
          &copy; The GUIDON 2024 All rights reserved. Designed and developed by the Digital Development staff 2023-2024.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
