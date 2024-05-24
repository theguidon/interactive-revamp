import React, { useEffect } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "./redux/modules/articles";

import AboutPage from "./pages/about";
import MainPage from "./pages/main";

import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={GeneralLayout()}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

function GeneralLayout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default App;
