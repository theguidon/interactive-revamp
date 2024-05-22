import { useState } from "react";
import "../styles/Carousel.css";

const json = await fetch("/data.json").then((r) => r.json());

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const changeArticle = () => {
    setCurrent(current === 2 ? 0 : current + 1);
  };

  return (
    <header className="carousel">
      {json.map((carousel, index) => {
        return (
          <section
            className={
              index === current
                ? "carousel__articleActive"
                : "carousel__article"
            }
          >
            {index === current && (
              <>
                <img
                  src={carousel.preview_url}
                  alt={carousel.description}
                  className="carousel__articleActive__image"
                  onLoad={setTimeout(changeArticle, 7000)}
                />
                <section className="carousel__articleActive__info">
                  <p>FEATURED</p>
                  <p>{carousel.title}</p>
                  <p>{carousel.description}</p>
                  <a href="#" className="carousel__button">
                    See more information
                  </a>
                </section>
              </>
            )}
          </section>
        );
      })}
    </header>
  );
};

export default Carousel;
