import React from "react";

import "./index.css";
import FocusCard from "../../components/focus-card";
import CarouselHero from "../../components/carousel-hero";
import ArticleCard from "../../components/article-card";
import { useSelector } from "react-redux";

function MainPage() {
  const articles = useSelector((state) => state.articles);

  return (
    <div id="home">
      <CarouselHero />

      <main className="general-container">
        <div className="articles-grid">
          {!articles.isLoading && !articles.isError && (
            <ArticleCard article={articles.data[0]} />
          )}{" "}
          {!articles.isLoading && !articles.isError && (
            <ArticleCard article={articles.data[1]} />
          )}{" "}
          {!articles.isLoading && !articles.isError && (
            <ArticleCard article={articles.data[2]} />
          )}
        </div>

        {/* <FocusCard /> */}
      </main>
    </div>
  );
}

export default MainPage;
