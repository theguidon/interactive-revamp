import React, { useEffect, useState } from "react";

import "./index.css";
import FocusCard from "../../components/focus-card";
import CarouselHero from "../../components/carousel-hero";
import ArticleCard from "../../components/article-card";
import { useSelector } from "react-redux";

function MainPage() {
  const articles = useSelector((state) => state.articles);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);

  const [categories, setCategories] = useState({});
  const [search, setSearch] = useState("");

  const getGroupSlugs = (idx, count) => {
    let minIdx = Math.floor(idx / count) * count;
    let maxIdx = (Math.floor(idx / count) + 1) * count;

    let pre = [];
    for (let i = minIdx; i < maxIdx; i++) {
      if (i < filtered.length) pre.push(filtered[i].slug);
    }

    return pre;
  };

  const ceilCount = () => (Math.floor(filtered.length / 3) + 1) * 3;

  const allCategsEnabled = () => {
    let valid = true;
    let keys = Object.keys(categories);

    for (let i = 0; i < keys.length; i++) {
      if (!categories[keys[i]]) {
        valid = false;
        break;
      }
    }

    return valid;
  };

  const handleAllClick = () => {
    let nf = { ...categories };

    if (allCategsEnabled()) {
      Object.keys(nf).forEach((categ) => {
        nf[categ] = false;
      });
    } else {
      Object.keys(nf).forEach((categ) => {
        nf[categ] = true;
      });
    }

    setCategories(nf);
  };

  useEffect(() => {
    if (!articles.isReady) return;

    let enabled = [];
    for (const [key, value] of Object.entries(categories)) {
      if (value) enabled.push(key);
    }

    let nf = articles.data.filter((a) =>
      a.categories.some((categ) => enabled.includes(categ))
    );

    setFiltered(nf);
  }, [categories, search]);

  useEffect(() => {
    let nf = {};

    for (let i = 0; i < articles.data.length; i++) {
      for (let j = 0; j < articles.data[i].categories.length; j++) {
        nf[articles.data[i].categories[j]] = true;
      }
    }

    setCategories(nf);
  }, [articles]);

  return (
    <div id="home">
      <CarouselHero />

      <main className="general-container">
        <div className="filters-group">
          <div className="categories">
            <button
              className={`categ ${allCategsEnabled() ? "active" : ""}`}
              onClick={handleAllClick}
            >
              All
            </button>

            {Object.keys(categories).map((categ, idx) => (
              <button
                key={`categ-${idx}`}
                className={`categ ${
                  allCategsEnabled() ? "" : categories[categ] ? "active" : ""
                }`}
                onClick={() => {
                  let nf = { ...categories };
                  nf[categ] = !nf[categ];

                  setCategories(nf);
                }}
              >
                {categ}
              </button>
            ))}
          </div>
        </div>

        <div className="articles-grid">
          {articles.isReady &&
            [...Array(ceilCount())].map((_, idx) => (
              <React.Fragment key={`article-${idx}`}>
                {idx < filtered.length && (
                  <ArticleCard
                    article={filtered[idx]}
                    onCardClick={() => {
                      if (selected !== filtered[idx].slug)
                        setSelected(filtered[idx].slug);
                      else setSelected(null);
                    }}
                    active={selected === filtered[idx].slug}
                  />
                )}

                {idx % 3 == 2 && getGroupSlugs(idx, 3).includes(selected) && (
                  <FocusCard
                    article={filtered.filter((a) => a.slug === selected)[0]}
                    focusGroup={3}
                  />
                )}

                {idx % 2 == 1 && getGroupSlugs(idx, 2).includes(selected) && (
                  <FocusCard
                    article={filtered.filter((a) => a.slug === selected)[0]}
                    focusGroup={2}
                  />
                )}

                {idx < filtered.length && selected === filtered[idx].slug && (
                  <FocusCard article={filtered[idx]} focusGroup={1} />
                )}
              </React.Fragment>
            ))}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
