import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/about";
import MainPage from "./pages/main";

import Header from "./components/header";
import Footer from "./components/footer";

function App() {
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
