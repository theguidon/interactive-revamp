import React, { useEffect, useRef, useState } from "react";
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
      title: "Year End Gallery 2023",
      desc: "As academic year 2022-2023 has come to an end, The GUIDON invites you to look back on the various events experienced by the Ateneo in the last year.",
      path: "/2023/05/year-end-gallery",
      cover:
        "https://interactive.theguidon.com/2023/05/year-end-gallery/thumbnail.png",
      preview:
        "https://interactive.theguidon.com/2023/05/year-end-gallery/thumbnail.png",
      bylines: [
        {
          key: "Written by",
          value: "The Photos Staff",
        },
        {
          key: "Photos by",
          value:
            "Miguel Abad, Stella Arenas, Jhanine Caoile, Karl Dimaculangan, Elly Kim, Soleil Nicolette, Mikyla Reyes, Patrick Reyes-Santos, Jillian C. Santos, Paulina Singh, Daryl D. Sy, France Vicente, and Vionna Villalon",
        },
        {
          key: "Designed by",
          value: "Emman Evangelista",
        },
        {
          key: "Developed by",
          value: "Emman Evangelista and Waleed Lugod",
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
  const container = useRef(null);
  const panels = useRef([]);

  useEffect(() => {
    if (container) {
      let cur = panels.current[panelIndex];
      let panel_bcr = cur.getBoundingClientRect();

      container.current.scrollTo(
        panel_bcr.left - panels.current[0].getBoundingClientRect().left,
        0
      );
    }

    const interval = setInterval(() => {
      setPanelIndex((prev) => (prev + 1 >= data.length ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [panelIndex]);

  return (
    <div id="hero">
      <div className="articles snap" ref={container}>
        {data.map((article, idx) => (
          <div
            className="panel"
            id={`panel-${idx}`}
            key={`panel-${idx}`}
            ref={(el) => (panels.current[idx] = el)}
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
      </div>

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
