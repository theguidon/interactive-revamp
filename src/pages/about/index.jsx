import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

import logo from "./../../assets/images/logos/base-white.svg";
import CardGallery from "../../components/card-gallery";
import { useSelector } from "react-redux";

function AboutPage() {
  const articles = useSelector((state) => state.articles);

  return (
    <div id="about">
      <div id="hero">
        <CardGallery />

        <div className="bg-tint" />

        <div className="general-container">
          <p>
            These articles—the fruits of collaboration between the Writing and
            Design Clusters—aim to provide readers with an{" "}
            <span className="hl">
              experience that goes beyond just traditional text and images
            </span>{" "}
            through the use of modern{" "}
            <span className="nowrap">web technologies.</span>
          </p>
        </div>
      </div>

      <div id="writeup" className="general-container">
        <p>
          With the changing fortunes of the industry over the past decade, the
          need for a news publication to have an online presence has never been
          more relevant.
        </p>

        <p>
          As such, The GUIDON has worked to establish and improve its online
          platform over the last few years. One product of this modernization,
          The GUIDON’s interactive articles, are an innovation in storytelling.
        </p>

        <p>
          These multimedia pieces are designed not only to{" "}
          <span className="hl">engage</span> and{" "}
          <span className="hl">immerse</span> the readers, but also to{" "}
          <span className="hl">enrich</span> their understanding of these
          stories in ways not possible on traditional media.
        </p>
      </div>

      <div
        id="explore"
        style={{
          background: articles.isReady
            ? `linear-gradient(0deg, #00000060, #00000060), url(${articles.data[0].preview})`
            : "",
        }}
      >
        <h3>Immerse yourself in a new story.</h3>
        <Link className="explore" to="/">
          Explore the interactives
        </Link>
      </div>

      <div id="guidon" className="general-container">
        <div>
          <p className="official">
            <span className="nowrap">The GUIDON</span> is the official student
            publication of the Ateneo de Manila University.
          </p>

          <p className="desc">
            Founded in 1929 by Rev. Frank O’Hara, SJ and first led by Manuel C.
            Colayco in 1930, it has since been a training ground for countless
            writers, designers and managers in the practice of responsible
            journalism.
          </p>
        </div>

        <img className="logo" src={logo} />
      </div>
    </div>
  );
}

export default AboutPage;
