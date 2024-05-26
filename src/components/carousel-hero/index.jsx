import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./index.css";

import { Link } from "react-router-dom";

import icon_facebook from "./../../assets/images/icons/facebook.svg";
import icon_twitter from "./../../assets/images/icons/twitter.svg";
import { DateFormatter } from "../../utils/date-formatter";

function CarouselHero() {
  const articles = useSelector((state) => state.articles);

  const [panelIndex, setPanelIndex] = useState(0);
  const container = useRef(null);
  const panels = useRef([]);

  useEffect(() => {
    if (articles.isReady) {
      if (container) {
        let cur = panels.current[panelIndex];
        let panel_bcr = cur.getBoundingClientRect();

        container.current.scrollTo(
          panel_bcr.left - panels.current[0].getBoundingClientRect().left,
          0
        );
      }

      const interval = setInterval(() => {
        setPanelIndex((prev) => (prev + 1 >= 3 ? 0 : prev + 1));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [articles, panelIndex]);

  return (
    <div id="hero">
      <div className="articles snap" ref={container}>
        {articles.isReady &&
          [...Array(3)].map((_, idx) => {
            let article = articles.data[idx];

            return (
              <div
                className="panel"
                id={`panel-${idx}`}
                key={`panel-${idx}`}
                ref={(el) => (panels.current[idx] = el)}
                style={{
                  backgroundImage: `url(${article.preview_image})`,
                }}
              >
                <div className="gradient-tint" />

                <div className="general-container">
                  <p className="featured">Featured</p>
                  <h1 className="title">{article.title}</h1>

                  <p className="date">
                    {DateFormatter(article.date_published)}
                  </p>
                  <p className="desc">{article.description}</p>

                  <div className="bylines">
                    {article.bylines.map((row, idx2) => (
                      <React.Fragment key={`panel-${idx}-${idx2}`}>
                        <p className="key">{row.key}</p>
                        <p className="value">{row.value}</p>
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="links">
                    <Link
                      className="view"
                      to={`https://interactive.theguidon.com${article.path}`}
                      target="_blank"
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
            );
          })}
      </div>

      <div className="buttons">
        {articles.isReady &&
          [...Array(3)].map((_, idx) => (
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
