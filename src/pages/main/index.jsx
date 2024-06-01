import React, { useState } from "react";

import "./index.css";
import FocusCard from "../../components/focus-card";
import CarouselHero from "../../components/carousel-hero";
import ArticleCard from "../../components/article-card";
import { useSelector } from "react-redux";

function MainPage() {
  const articles = useSelector((state) => state.articles);
  const [selected, setSelected] = useState(null);

  const getGroupSlugs = (idx, count) => {
    let minIdx = Math.floor(idx / count) * count;
    let maxIdx = (Math.floor(idx / count) + 1) * count;

    let filtered = [];
    for (let i = minIdx; i < maxIdx; i++) {
      if (i < articles.data.length) filtered.push(articles.data[i].slug);
    }

    return filtered;
  };

  const ceilCount = () => (Math.floor(articles.data.length / 3) + 1) * 3;

  return (
    <div id="home">
      <CarouselHero />

      <main className="general-container">
        <div className="articles-grid">
          {articles.isReady &&
            [...Array(ceilCount())].map((_, idx) => (
              <React.Fragment key={`article-${idx}`}>
                {idx < articles.data.length && (
                  <ArticleCard
                    article={articles.data[idx]}
                    onCardClick={() => {
                      if (selected !== articles.data[idx].slug)
                        setSelected(articles.data[idx].slug);
                      else setSelected(null);
                    }}
                    active={selected === articles.data[idx].slug}
                  />
                )}

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

                {idx < articles.data.length &&
                  selected === articles.data[idx].slug && (
                    <FocusCard article={articles.data[idx]} focusGroup={1} />
                  )}
              </React.Fragment>
            ))}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
