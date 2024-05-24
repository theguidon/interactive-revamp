import React from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";

import logo from "./../../assets/images/logos/interactive-longform.svg";

function Header() {
  return (
    <header>
      <div className="general-container">
        <Link to="/" className="logo-container">
          <img className="logo" src={logo} />
        </Link>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
