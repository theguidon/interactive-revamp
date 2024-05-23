import { useState } from "react";
import exitIcon from "../assets/images/ExitModalIcon.png";
import styles from "../styles/Carousel.module.css";

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
    document.body.classList.add("carouselModalActive");
  } else {
    document.body.classList.remove("carouselModalActive");
  }

  return (
    <header className="carousel">
      {json.map((carousel, index) => {
        return (
          <section
            className={
              index === current
                ? styles.carouselArticleActive
                : styles.carouselArticle
            }
          >
            {index === current && (
              <>
                <img
                  src={carousel.preview_url}
                  alt={carousel.description}
                  className={styles.carouselImage}
                  onLoad={setTimeout(changeArticle, 7000)}
                />
                <section className={styles.carouselInfo}>
                  <p>FEATURED</p>
                  <p>{carousel.title}</p>
                  <p>{carousel.description}</p>
                  <section className={styles.carouselStaffs}>
                    <section className={styles.carouselStaff}>
                      <p
                        className={styles.carouselStaffNames}
                        style={
                          carousel.writers_byline != ""
                            ? { margin: "0.2rem" }
                            : { margin: "0" }
                        }
                      >
                        Written by
                      </p>
                      <div className={styles.carouselBylinesContainer}>
                        <p
                          className={styles.carouselBylines}
                          style={
                            carousel.writers_byline != ""
                              ? { margin: "0.2rem" }
                              : { margin: "0" }
                          }
                        >
                          {carousel.writers_byline}
                        </p>
                        <span className={styles.carouselTooltip}>
                          {carousel.writers_byline}
                        </span>
                      </div>
                    </section>
                    <section className={styles.carouselStaff}>
                      <p
                        className={styles.carouselStaffNames}
                        style={
                          carousel.photos_byline != ""
                            ? { margin: "0.2rem" }
                            : { margin: "0" }
                        }
                      >
                        Photos by
                      </p>
                      <div className={styles.carouselBylinesContainer}>
                        <p
                          className={styles.carouselBylines}
                          style={
                            carousel.photos_byline != ""
                              ? { margin: "0.2rem" }
                              : { margin: "0" }
                          }
                        >
                          {carousel.photos_byline}
                        </p>
                        <span className={styles.carouselTooltip}>
                          {carousel.photos_byline}
                        </span>
                      </div>
                    </section>
                    <section className={styles.carouselStaff}>
                      <p
                        className={styles.carouselStaffNames}
                        style={
                          carousel.videos_byline != ""
                            ? { margin: "0.2rem" }
                            : { margin: "0" }
                        }
                      >
                        {carousel.videos_byline != "" ? "Videos by" : ""}
                      </p>
                      <div className={styles.carouselBylinesContainer}>
                        <p
                          className={styles.carouselBylines}
                          style={
                            carousel.videos_byline != ""
                              ? { margin: "0.2rem" }
                              : { margin: "0" }
                          }
                        >
                          {carousel.videos_byline}
                        </p>
                        <span className={styles.carouselTooltip}>
                          {carousel.videos_byline}
                        </span>
                      </div>
                    </section>
                    <section className={styles.carouselStaff}>
                      <p
                        className={styles.carouselStaffNames}
                        style={
                          carousel.graphics_byline != ""
                            ? { margin: "0.2rem" }
                            : { margin: "0" }
                        }
                      >
                        Illustrations by
                      </p>
                      <div className={styles.carouselBylinesContainer}>
                        <p
                          className={styles.carouselBylines}
                          style={
                            carousel.graphics_byline != ""
                              ? { margin: "0.2rem" }
                              : { margin: "0" }
                          }
                        >
                          {carousel.graphics_byline}
                        </p>
                        <span className={styles.carouselTooltip}>
                          {carousel.graphics_byline}
                        </span>
                      </div>
                    </section>
                    <section className={styles.carouselStaff}>
                      <p
                        className={styles.carouselStaffNames}
                        style={
                          carousel.interactive_byline != ""
                            ? { margin: "0.2rem" }
                            : { margin: "0" }
                        }
                      >
                        Interactive by
                      </p>
                      <div className={styles.carouselBylinesContainer}>
                        <p
                          className={styles.carouselBylines}
                          style={
                            carousel.interactive_byline != ""
                              ? { margin: "0.2rem" }
                              : { margin: "0" }
                          }
                        >
                          {carousel.interactive_byline}
                        </p>
                        <span className={styles.carouselTooltip}>
                          {carousel.interactive_byline}
                        </span>
                      </div>
                    </section>
                  </section>
                  <section className={styles.carouselButtons}>
                    <a
                      href="#"
                      className={styles.carouselButton}
                      id={styles.carouselCredits}
                    >
                      View interactive
                    </a>
                    <a
                      href="#"
                      className={styles.carouselButton}
                      id={styles.carouselInteractive}
                      onClick={toggleModal}
                    >
                      Show credits
                    </a>
                    {modal && (
                      <section className={styles.carouselModal}>
                        <div
                          onClick={toggleModal}
                          className={styles.overlay}
                        ></div>
                        <section className={styles.carouselModalContent}>
                          <p className={styles.carouselModalTitle}>
                            {carousel.title}
                          </p>
                          <section className={styles.carouselStaffsModal}>
                            <section className={styles.carouselStaffModal}>
                              <p
                                className={styles.carouselStaffNamesModal}
                                style={
                                  carousel.writers_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                Written by
                              </p>
                              <p
                                className={styles.carouselBylinesContainerModal}
                                style={
                                  carousel.writers_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                {carousel.writers_byline}
                              </p>
                            </section>
                            <section className={styles.carouselStaffModal}>
                              <p
                                className={styles.carouselStaffNamesModal}
                                style={
                                  carousel.photos_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                Photos by
                              </p>
                              <p
                                className={styles.carouselBylinesContainerModal}
                                style={
                                  carousel.photos_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                {carousel.photos_byline}
                              </p>
                            </section>
                            <section className={styles.carouselStaffModal}>
                              <p
                                className={styles.carouselStaffNamesModal}
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
                                className={styles.carouselBylinesContainerModal}
                                style={
                                  carousel.videos_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                {carousel.videos_byline}
                              </p>
                            </section>
                            <section className={styles.carouselStaffModal}>
                              <p
                                className={styles.carouselStaffNamesModal}
                                style={
                                  carousel.graphics_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                Illustrations by
                              </p>
                              <p
                                className={styles.carouselBylinesContainerModal}
                                style={
                                  carousel.graphics_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                {carousel.graphics_byline}
                              </p>
                            </section>
                            <section className={styles.carouselStaffModal}>
                              <p
                                className={styles.carouselStaffNamesModal}
                                style={
                                  carousel.interactive_byline != ""
                                    ? { margin: "0.2rem" }
                                    : { margin: "0" }
                                }
                              >
                                Interactive by
                              </p>
                              <p
                                className={styles.carouselBylinesContainerModal}
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
                            className={styles.carouselCloseModal}
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
