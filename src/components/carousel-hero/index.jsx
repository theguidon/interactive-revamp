import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

import { Link } from "react-router-dom";

import icon_facebook from "./../../assets/images/icons/facebook.svg";
import icon_twitter from "./../../assets/images/icons/twitter.svg";
import { DateFormatter } from "../../utils/date-formatter";
import { InteractivePath } from "../../utils/interactive-path";
import { fetchFeatured } from "./../../redux/modules/featured";

function CarouselHero() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const featured = useSelector((state) => state.featured);

  const [panelIndex, setPanelIndex] = useState(0);
  const container = useRef(null);
  const panels = useRef([]);

  useEffect(() => {
    if (articles.isReady && featured.isReady) {
      if (container) {
        let cur = panels.current[panelIndex];
        let panel_bcr = cur.getBoundingClientRect();

        container.current.scrollTo(
          panel_bcr.left - panels.current[0].getBoundingClientRect().left,
          0
        );
      }

      const interval = setInterval(() => {
        setPanelIndex((prev) =>
          prev + 1 >= 1 + featured.data.length ? 0 : prev + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [articles, featured, panelIndex]);

  useEffect(() => {
    dispatch(fetchFeatured());
  }, []);

  return (
    <div id="hero">
      <div className="articles snap" ref={container}>
        {articles.isReady &&
          featured.isReady &&
          [...Array(1 + featured.data.length)].map((_, idx) => {
            let article =
              idx == 0 ? articles.data[idx] : featured.data[idx - 1];

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
                  <p className="featured">{idx == 0 ? "Latest" : "Featured"}</p>
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
                      to={InteractivePath(article.path)}
                      target="_blank"
                    >
                      View Interactive
                    </Link>

                    <div className="socials">
                      <Link
                        to={`http://www.facebook.com/sharer.php?u=${InteractivePath(
                          article.path
                        )}`}
                        target="_blank"
                      >
                        <img src={icon_facebook} alt="Share on Facebook" />
                      </Link>
                      <Link
                        to={`http://x.com/share?url=${InteractivePath(
                          article.path
                        )}&text=${article.title}`}
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
          featured.isReady &&
          [...Array(1 + featured.data.length)].map((_, idx) => (
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
