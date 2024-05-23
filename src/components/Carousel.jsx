import { useState } from "react";
import exitIcon from "../assets/images/ExitModalIcon.png";
import "../styles/Carousel.css";

const json = await fetch("/data.json").then((r) => r.json());

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState(false);

  const changeArticle = () => {
    setCurrent(current === 2 ? 0 : current + 1);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("carousel__activeModal");
  } else {
    document.body.classList.remove("carousel__activeModal");
  }

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
                  <section className="carousel__articleActive__staffs">
                    <section className="carousel__staffs__staff">
                      <p
                        className="carousel__staffNames"
                        style={
                          carousel.writers_byline != ""
                            ? { margin: "0.2rem" }
                            : { margin: "0" }
                        }
                      >
                        Written by
                      </p>
                      <div className="carousel__bylines">
                        <p
                          className="carousel__staff__bylines"
                          style={
                            carousel.writers_byline != ""
                              ? { margin: "0.2rem" }
                              : { margin: "0" }
                          }
                        >
                          {carousel.writers_byline}
                        </p>
                        <span className="carousel__staff__tooltip">
                          {carousel.writers_byline}
                        </span>
                      </div>
                    </section>
                    <section className="carousel__staffs__staff">
                      <p
                        className="carousel__staffNames"
                        style={
                          carousel.photos_byline != ""
                            ? { margin: "0.2rem" }
                            : { margin: "0" }
                        }
                      >
                        Photos by
                      </p>
                      <div className="carousel__bylines">
                        <p
                          className="carousel__staff__bylines"
                          style={
                            carousel.photos_byline != ""
                              ? { margin: "0.2rem" }
                              : { margin: "0" }
                          }
                        >
                          {carousel.photos_byline}
                        </p>
                        <span className="carousel__staff__tooltip">
                          {carousel.photos_byline}
                        </span>
                      </div>
                    </section>
                    <section className="carousel__staffs__staff">
                      <p
                        className="carousel__staffNames"
                        style={
                          carousel.videos_byline != ""
                            ? { margin: "0.2rem" }
                            : { margin: "0" }
                        }
                      >
                        {carousel.videos_byline != "" ? "Videos by" : ""}
                      </p>
                      <div className="carousel__bylines">
                        <p
                          className="carousel__staff__bylines"
                          style={
                            carousel.videos_byline != ""
                              ? { margin: "0.2rem" }
                              : { margin: "0" }
                          }
                        >
                          {carousel.videos_byline}
                        </p>
                        <span className="carousel__staff__tooltip">
                          {carousel.videos_byline}
                        </span>
                      </div>
                    </section>
                    <section className="carousel__staffs__staff">
                      <p
                        className="carousel__staffNames"
                        style={
                          carousel.graphics_byline != ""
                            ? { margin: "0.2rem" }
                            : { margin: "0" }
                        }
                      >
                        Illustrations by
                      </p>
                      <div className="carousel__bylines">
                        <p
                          className="carousel__staff__bylines"
                          style={
                            carousel.graphics_byline != ""
                              ? { margin: "0.2rem" }
                              : { margin: "0" }
                          }
                        >
                          {carousel.graphics_byline}
                        </p>
                        <span className="carousel__staff__tooltip">
                          {carousel.graphics_byline}
                        </span>
                      </div>
                    </section>
                    <section className="carousel__staffs__staff">
                      <p
                        className="carousel__staffNames"
                        style={
                          carousel.interactive_byline != ""
                            ? { margin: "0.2rem" }
                            : { margin: "0" }
                        }
                      >
                        Interactive by
                      </p>
                      <div className="carousel__bylines">
                        <p
                          className="carousel__staff__bylines"
                          style={
                            carousel.interactive_byline != ""
                              ? { margin: "0.2rem" }
                              : { margin: "0" }
                          }
                        >
                          {carousel.interactive_byline}
                        </p>
                        <span className="carousel__staff__tooltip">
                          {carousel.interactive_byline}
                        </span>
                      </div>
                    </section>
                  </section>
                  <section className="carousel__articleActive__buttons">
                    <a
                      href="#"
                      className="carousel__button"
                      id="carousel__button--interactive"
                    >
                      View interactive
                    </a>
                    <a
                      href="#"
                      className="carousel__button"
                      id="carousel__button--credits"
                      onClick={toggleModal}
                    >
                      Show credits
                    </a>
                    {modal && (
                      <section className="carousel__modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <section className="carousel__modalContent">
                          <h2>{carousel.title}</h2>
                          <section className="carousel__staffs--modal">
                            <section className="carousel__staff--modal">
                              <p
                                className="carousel__staffNames--modal"
                                style={
                                  carousel.writers_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                Written by
                              </p>
                              <p
                                className="carousel__bylines--modal"
                                style={
                                  carousel.writers_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                {carousel.writers_byline}
                              </p>
                            </section>
                            <section className="carousel__staff--modal">
                              <p
                                className="carousel__staffNames--modal"
                                style={
                                  carousel.photos_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                Photos by
                              </p>
                              <p
                                className="carousel__bylines--modal"
                                style={
                                  carousel.photos_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                {carousel.photos_byline}
                              </p>
                            </section>
                            <section className="carousel__staff--modal">
                              <p
                                className="carousel__staffNames--modal"
                                style={
                                  carousel.videos_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                {carousel.videos_byline != ""
                                  ? "Videos by"
                                  : ""}
                              </p>
                              <p
                                className="carousel__bylines--modal"
                                style={
                                  carousel.videos_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                {carousel.videos_byline}
                              </p>
                            </section>
                            <section className="carousel__staff--modal">
                              <p
                                className="carousel__staffNames--modal"
                                style={
                                  carousel.graphics_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                Illustrations by
                              </p>
                              <p
                                className="carousel__bylines--modal"
                                style={
                                  carousel.graphics_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                {carousel.graphics_byline}
                              </p>
                            </section>
                            <section className="carousel__staff--modal">
                              <p
                                className="carousel__staffNames--modal"
                                style={
                                  carousel.interactive_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                Interactive by
                              </p>
                              <p
                                className="carousel__bylines--modal"
                                style={
                                  carousel.interactive_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                {carousel.interactive_byline}
                              </p>
                            </section>
                          </section>
                          <button
                            className="carousel__closeModal"
                            onClick={toggleModal}
                          >
                            <img src={exitIcon} alt="Exit Modal" />
                          </button>
                        </section>
                      </section>
                    )}
                  </section>
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
