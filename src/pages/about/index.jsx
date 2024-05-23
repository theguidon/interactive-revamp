import React from "react";
import "./index.css";
import Body from "./body.jsx" 
import Body2 from "./body2.jsx" 

function AboutPage() {
  return(
  <>
  <div className="about-main-grid">
    <div className="a">
      <img className="gallery" src="https://picsum.photos/1080/300"></img>
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
      {/* <p>
        With the changing fortunes of the industry over the past decade, the
        need for a news publication to have an online presence has never
        been more relevant.
      </p>
      <br></br>
      <p>
        As such, The GUIDON has worked to establish and improve its online
        platform over the last few years. One product of this modernization,
        The GUIDON’s interactive articles, are an innovation in
        storytelling.
      </p>
      <br></br>
      <p>
        These multimedia pieces are designed not only to{" "}
        <span className="green-span">engage</span> and{" "}
        <span className="green-span">immerse</span> the readers, but also to{" "}
        <span className="green-span">enrich</span> their understanding of
        these stories in ways not possible on traditional media.
      </p>
      <br></br> */}
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
            {/* <p>
              Founded in 1929 by Rev. Frank O’Hara, SJ and first led by
              Manuel C. Colayco in 1930, it has since been a training ground
              for countless writers, designers and managers in the practice
              of responsible journalism.
            </p> */}
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
