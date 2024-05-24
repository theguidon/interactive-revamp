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
        {!articles.isLoading && !articles.isError && (
          <ArticleCard article={articles.data[0]} />
        )}

        <FocusCard />
      </main>
    </div>
  );
}

export default MainPage;
