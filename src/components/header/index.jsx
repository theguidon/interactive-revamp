import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

import logo from "./../../assets/images/logos/interactive-longform.svg";

function Header() {
  return (
    <header>
      <div className="general-container">
        <Link to="/">
          <img src={logo} />
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
