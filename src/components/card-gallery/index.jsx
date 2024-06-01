import { useSelector } from "react-redux";
import "./index.css";
import React from "react";

function CardGallery() {
  const articles = useSelector((state) => state.articles);

  return (
    <div className="card-gallery">
      {articles.isReady &&
        [...Array(5)].map((_, outer) => (
          <div className="card-group" key={`outer-${outer}`}>
            {[...Array(10)].map((_, idx) => (
              <img
                className="card"
                src={articles.data[idx].cover}
                key={`card-${outer}-${idx}`}
              />
            ))}

            {[...Array(10)].map((_, idx) => (
              <img
                className="card"
                src={articles.data[articles.data.length - 10 - 1 + idx].cover}
                key={`card-${outer}-rev-${idx}`}
              />
            ))}
          </div>
        ))}
    </div>
  );
}

export default CardGallery;
