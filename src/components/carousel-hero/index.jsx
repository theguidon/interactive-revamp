import React, { useState } from "react";
import "./index.css";

import sample from "./../../assets/images/sample.png";
import { Link } from "react-router-dom";

import icon_facebook from "./../../assets/images/icons/facebook.svg";
import icon_twitter from "./../../assets/images/icons/twitter.svg";

function CarouselHero() {
  const data = [
    {
      title: "One Big Adventure",
      desc: "Experience a day as a student in the Ateneo in this interactive by The GUIDON.",
      path: "/2023/08/one-big-adventure",
      cover:
        "https://interactive.theguidon.com/2023/08/one-big-adventure/one-big-adventure.png",
      preview:
        "https://interactive.theguidon.com/2023/08/one-big-adventure/one-big-adventure.png",
      bylines: [
        {
          key: "Written by",
          value: "Reisha Jamola and Therese Alexandria Garcia",
        },
        {
          key: "Photos by",
          value:
            "Bettina Cuan, Vionna Villalon, Paulina Singh, Sarmiento, Stella Arenas, Ralph Lim, Liana Fernando, Daryl Sy, and Miguel Abad",
        },
        {
          key: "Graphics by",
          value: "Bryce Garrett Tamayo, Frants Reyes, and Kathrynne Yu",
        },
        {
          key: "Designed by",
          value: "Frants Reyes and Kathrynne Yu",
        },
        {
          key: "Developed by",
          value: "Waleed Lugod, Chesca Reyes, and Luigi Rodriguez",
        },
      ],
    },
    {
      title: "Dead End: The Commuter Experience",
      desc: "Dead End is a project by the Features, Photos, Video Production, and Digital Development Staffs of AY 2022–2023.",
      path: "/2023/05/dead-end",
      cover: "https://interactive.theguidon.com/2023/05/dead-end/thumbnail.png",
      preview:
        "https://interactive.theguidon.com/2023/05/dead-end/thumbnail.png",
      bylines: [
        {
          key: "Written by",
          value: "Ariana Enriquez and Reign Iris Centeno",
        },
        {
          key: "Photos by",
          value: "Miguel Abad, Pat Ong, Mikyla Reyes, and Patrick Reyes-Santos",
        },
        {
          key: "Videos by",
          value: "Matthew V. Samson, Tiffani Ong, and Abigail M. Chua",
        },
        {
          key: "Illustrations by",
          value: "Zanti Gayares",
        },
        {
          key: "Designed by",
          value: "Razel Tan and Frants Reyes",
        },
        {
          key: "Developed by",
          value: "Emman Evangelista",
        },
      ],
    },
  ];

  const [panelIndex, setPanelIndex] = useState(0);

  const setPanel = (idx) => {};

  return (
    <div id="hero" className="snap">
      {data.map((article, idx) => (
        <div
          className="panel"
          key={`panel-${idx}`}
          style={{
            background: `linear-gradient(90deg, #001B43 10%, #0E2F628C 45%, #153A7100 60%, #1C448000 100%), url(${article.preview})`,
          }}
        >
          <div className="general-container">
            <p className="featured">Featured</p>
            <h1 className="title">{article.title}</h1>

            <p className="desc">{article.desc}</p>

            <div className="bylines">
              {article.bylines.map((row) => (
                <React.Fragment>
                  <p className="key">{row.key}</p>
                  <p className="value">{row.value}</p>
                </React.Fragment>
              ))}
            </div>

            <div className="links">
              <Link
                className="view"
                to={`https://interactive.theguidon.com${article.path}`}
              >
                View Interactive
              </Link>

              <div className="socials">
                <Link
                  to={`http://www.facebook.com/sharer.php?u=https://interactive.theguidon.com${article.path}`}
                  target="_blank"
                >
                  <img src={icon_facebook} alt="Share on Facebook" />
                </Link>
                <Link
                  to={`http://x.com/share?url=https://interactive.theguidon.com${article.path}&text=${article.title}`}
                  target="_blank"
                >
                  <img src={icon_twitter} alt="Share on Twitter" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="buttons">
        {data.map((article, idx) => (
          <button
            className={`circle ${idx == panelIndex ? "active" : ""}`}
            key={`btn-${idx}`}
            onClick={() => {
              setPanelIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselHero;
