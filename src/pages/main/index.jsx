import React, { useState } from "react";

import "./index.css";
import FocusCard from "../../components/focus-card";
import CarouselHero from "../../components/carousel-hero";
import ArticleCard from "../../components/article-card";
import { useSelector } from "react-redux";

function MainPage() {
  const articles = useSelector((state) => state.articles);
  const [selected, setSelected] = useState(null);

  return (
    <div id="home">
      <CarouselHero />

      <main className="general-container">
        <div className="articles-grid">
          {articles.isReady ? (
            articles.data.map((article, idx) => (
              <ArticleCard
                article={article}
                key={`article-${article.slug}`}
                onCardClick={() => {
                  if (selected !== article.slug) setSelected(article.slug);
                  else setSelected(null);
                }}
                active={selected === article.slug}
              />
            ))
          ) : (
            <></>
          )}

          {articles.isReady && selected && (
            <FocusCard
              article={
                articles.data.filter((article) => article.slug === selected)[0]
              }
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
