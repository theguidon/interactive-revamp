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
            articles.data.map((article) => (
              <React.Fragment key={`article-${article.slug}`}>
                <ArticleCard
                  article={article}
                  onCardClick={() => {
                    if (selected !== article.slug) setSelected(article.slug);
                    else setSelected(null);
                  }}
                  active={selected === article.slug}
                />

                {/* {selected && selected === article.slug && (
                  <FocusCard article={article} />
                )} */}
              </React.Fragment>
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
