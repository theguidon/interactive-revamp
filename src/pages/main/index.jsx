import React, { useState } from "react";

import "./index.css";
import FocusCard from "../../components/focus-card";
import CarouselHero from "../../components/carousel-hero";
import ArticleCard from "../../components/article-card";
import { useDispatch, useSelector } from "react-redux";

function MainPage() {
  const articles = useSelector((state) => state.articles);
  const [selected, setSelected] = useState(null);

  const getGroupSlugs = (idx, count) => {
    let minIdx = Math.floor(idx / count) * count;
    let maxIdx = (Math.floor(idx / count) + 1) * count;

    let filtered = [];
    for (let i = minIdx; i < maxIdx; i++) {
      filtered.push(articles.data[i].slug);
    }

    return filtered;
  };

  return (
    <div id="home">
      <CarouselHero />

      <main className="general-container">
        <div className="articles-grid">
          {articles.isReady &&
            articles.data.map((article, idx) => (
              <React.Fragment key={`article-${article.slug}`}>
                <ArticleCard
                  article={article}
                  onCardClick={() => {
                    if (selected !== article.slug) setSelected(article.slug);
                    else setSelected(null);
                  }}
                  active={selected === article.slug}
                />

                {idx % 3 == 2 && getGroupSlugs(idx, 3).includes(selected) && (
                  <FocusCard
                    article={
                      articles.data.filter((a) => a.slug === selected)[0]
                    }
                    focusGroup={3}
                  />
                )}

                {idx % 2 == 1 && getGroupSlugs(idx, 2).includes(selected) && (
                  <FocusCard
                    article={
                      articles.data.filter((a) => a.slug === selected)[0]
                    }
                    focusGroup={2}
                  />
                )}

                {selected === article.slug && (
                  <FocusCard article={article} focusGroup={1} />
                )}
              </React.Fragment>
            ))}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
