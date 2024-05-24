import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./modules/articles.jsx";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});
