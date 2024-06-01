import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./modules/articles.jsx";
import featuredReducer from "./modules/featured.jsx";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    featured: featuredReducer,
  },
});
