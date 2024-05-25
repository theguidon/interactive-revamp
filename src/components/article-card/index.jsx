import React from "react";
import "./index.css";

function ArticleCard(props) {
  return (
    <div
      className={`article-card ${props.active ? "active" : ""}`}
      onClick={props.onCardClick}
    >
      <div className="cover-container">
        <img className="cover" src={props.article.cover} />
        <img className="cover hover" src={props.article.preview} />
        <svg
          className="polygon"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6162 19.1454C13.3163 21.6873 9.68368 21.6873 8.3838 19.1454L1.49854 5.68093C0.307629 3.35206 1.99903 0.587402 4.61473 0.587402L18.3853 0.587402C21.001 0.587402 22.6924 3.35206 21.5015 5.68093L14.6162 19.1454Z"
            fill="#53BC91"
            stroke="#53BC91"
          />
        </svg>
      </div>

      <p className="title">{props.article.title}</p>
    </div>
  );
}

export default ArticleCard;
