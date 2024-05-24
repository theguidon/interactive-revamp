import React from "react";
import "./index.css";
import Body from "./body.jsx" 
import Body2 from "./body2.jsx" 

function AboutPage() {
  return(
  <>
  <div className="about-main-grid">
    <div className="a">
      <div className="gallery"></div>
      <p className="these">
        <b>
          These articles — the fruits of collaboration between the Writing
          and Design Clusters — aim to provide readers with an{" "}
          <span className="green-span">
            experience that goes beyond just traditional text and images
          </span>{" "}
          through the use of modern web technologies.
        </b>
      </p>
    </div>
    <div className="b">
      <Body />
    </div>
    <div className="c">
      <a className="explore fadeInUp" href="/" target="_blank">Explore the interactives</a>
    </div>
    <div className="d">
      <div className="f">
        <div className="g">
          <div className="i">
            <p className="guidon">
              The GUIDON is the official student publication of the Ateneo
              de Manila University.
            </p>
          </div>
          <div className="j">
            <Body2 />
          </div>
        </div>
        <div className="h">
          <img className="fadeInUp"
            src="/src/assets/images/logos/white-base.svg"
            width="240.46"
            height="263.61"
          ></img>
        </div>
      </div>
    </div>
  </div>
</>)
  ;
}

export default AboutPage;
