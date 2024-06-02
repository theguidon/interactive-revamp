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

  const [showModal, setShowModal] = useState(false);

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

    if (search) {
      nf = nf.filter(
        (a) =>
          a.title.toLowerCase().includes(search.toLowerCase()) ||
          a.raw_bylines.toLowerCase().includes(search.toLowerCase())
      );
    }

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

            {Object.keys(categories)
              .sort()
              .map((categ, idx) => (
                <button
                  key={`categ-${idx}`}
                  className={`categ ${
                    allCategsEnabled() ? "" : categories[categ] ? "active" : ""
                  }`}
                  onClick={() => {
                    let nf = { ...categories };

                    if (allCategsEnabled()) {
                      Object.keys(nf).forEach((key) => {
                        nf[key] = false;
                      });
                      nf[categ] = true;
                    } else {
                      nf[categ] = !nf[categ];
                    }

                    setCategories(nf);
                  }}
                >
                  {categ}
                </button>
              ))}
          </div>

          <div className="search-field">
            <input
              type="text"
              value={search}
              onChange={(val) => setSearch(val.target.value)}
              placeholder="Search"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path d="M35.6789 32.9211L28.3281 25.5703C30.0979 23.2144 31.0533 20.3466 31.05 17.4C31.05 9.87344 24.9266 3.75 17.4 3.75C9.87344 3.75 3.75 9.87344 3.75 17.4C3.75 24.9266 9.87344 31.05 17.4 31.05C20.3466 31.0533 23.2144 30.0979 25.5703 28.3281L32.9211 35.6789C33.2932 36.0115 33.7785 36.1891 34.2774 36.1751C34.7763 36.1612 35.2509 35.9567 35.6038 35.6038C35.9567 35.2509 36.1612 34.7763 36.1751 34.2774C36.1891 33.7785 36.0115 33.2932 35.6789 32.9211ZM7.65 17.4C7.65 15.4716 8.22183 13.5866 9.29317 11.9832C10.3645 10.3798 11.8873 9.13013 13.6688 8.39217C15.4504 7.65422 17.4108 7.46114 19.3021 7.83734C21.1934 8.21355 22.9307 9.14215 24.2943 10.5057C25.6579 11.8693 26.5865 13.6066 26.9627 15.4979C27.3389 17.3892 27.1458 19.3496 26.4078 21.1312C25.6699 22.9127 24.4202 24.4355 22.8168 25.5068C21.2134 26.5782 19.3284 27.15 17.4 27.15C14.8151 27.1469 12.3369 26.1187 10.5091 24.2909C8.68133 22.4631 7.6531 19.9849 7.65 17.4Z" />
            </svg>
          </div>
        </div>

        <div className="articles-grid">
          {articles.isReady &&
            [...Array(ceilCount())].map((_, idx) => (
              <React.Fragment
                key={`article-${
                  idx < filtered.length ? filtered[idx].slug : "filler-" + idx
                }`}
              >
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
                    showModal={() => {
                      setShowModal(true);
                    }}
                    article={filtered.filter((a) => a.slug === selected)[0]}
                    focusGroup={3}
                  />
                )}

                {idx % 2 == 1 && getGroupSlugs(idx, 2).includes(selected) && (
                  <FocusCard
                    showModal={() => {
                      setShowModal(true);
                    }}
                    article={filtered.filter((a) => a.slug === selected)[0]}
                    focusGroup={2}
                  />
                )}

                {idx < filtered.length && selected === filtered[idx].slug && (
                  <FocusCard
                    showModal={() => {
                      setShowModal(true);
                    }}
                    article={filtered[idx]}
                    focusGroup={1}
                  />
                )}
              </React.Fragment>
            ))}
        </div>
      </main>

      {selected &&
        filtered
          .filter((a) => a.slug === selected)
          .map((article) => (
            <div
              className={`credits-bg ${showModal ? "active" : ""}`}
              key={`credits-mobile-${article.slug}`}
            >
              <div
                className="bg"
                onClick={() => {
                  setShowModal(false);
                }}
              />

              <div className="modal">
                <svg
                  className="close"
                  onClick={() => {
                    setShowModal(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.21289 2L12.1703 11.9574"
                    stroke="white"
                    stroke-width="2.75875"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2.16992 12L12.1273 2.04263"
                    stroke="white"
                    stroke-width="2.75875"
                    stroke-linecap="round"
                  />
                </svg>

                <h3 className="title">{article.title}</h3>

                <div className="bylines">
                  {article.bylines.map((row, idx) => (
                    <React.Fragment key={`bylines-row-${idx}`}>
                      <p className="key">{row.key}</p>
                      <p className="value">{row.value}</p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default MainPage;
