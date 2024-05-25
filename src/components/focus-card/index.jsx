import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import icon_facebook from "./../../assets/images/icons/facebook.svg";
import icon_twitter from "./../../assets/images/icons/twitter.svg";
import { DateFormatter } from "../../utils/date-formatter";

function FocusCard(props) {
  return (
    <div className={`focus-card focus-${props.focusGroup}`}>
      {props.article && (
        <>
          <div
            className="content"
            style={{
              backgroundImage: `url(${props.article.cover})`,
            }}
          >
            <div className="gradient-tint" />

            <h2 className="title">{props.article.title}</h2>
            <p className="date">
              {DateFormatter(props.article.date_published)}
            </p>
            <p className="desc">{props.article.description}</p>

            <div className="links">
              <div className="buttons">
                <Link
                  className="view"
                  to={`https://interactive.theguidon.com${props.article.path}`}
                  target="_blank"
                >
                  View Interactive
                </Link>

                <button className="show-credits">Show Credits</button>
              </div>

              <div className="socials">
                <Link
                  to={`http://www.facebook.com/sharer.php?u=https://interactive.theguidon.com${props.article.path}`}
                  target="_blank"
                >
                  <img src={icon_facebook} alt="Share on Facebook" />
                </Link>
                <Link
                  to={`http://x.com/share?url=https://interactive.theguidon.com${props.article.path}&text=${props.article.title}`}
                  target="_blank"
                >
                  <img src={icon_twitter} alt="Share on Twitter" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer">
            {props.article.bylines.map((row, idx) => (
              <React.Fragment key={`bylines-row-${idx}`}>
                <p className="key">{row.key}</p>
                <p className="value">{row.value}</p>
              </React.Fragment>
            ))}
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default FocusCard;
