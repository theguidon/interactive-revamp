import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import icon_facebook from "./../../assets/images/icons/facebook.svg";
import icon_twitter from "./../../assets/images/icons/twitter.svg";
import icon_instagram from "./../../assets/images/icons/instagram.svg";


function FocusCard() {
  var title = "Placeholder Title: Placeholder Subtitle";
  var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut sem eu.";
  var writers_byline = "In eu est laoreet, lacinia dui.";
  var date = "May 2024";

  var interactiveLink = "https://interactive.theguidon.com";

  return (
    <>
    <div className="focus-card">
      <div className="heading">
        <div className="title">{title}</div>
        <div className="date-byline">{date} · by {writers_byline}</div>
        <p>{description}</p>
      </div>
      <div className="others">
        <Link to= {interactiveLink} target="_blank">
          <button className="button">View interactive</button>
        </Link>
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
        </div>
      </div>
    </div>
    </>
  );
}

export default FocusCard;
