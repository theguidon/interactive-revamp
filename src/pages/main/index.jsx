import React from "react";

import "./index.css";
import FocusCard from "../../components/focus-card";
import CarouselHero from "../../components/carousel-hero";

function MainPage() {
  return (
    <>
      <CarouselHero />

      <main className="general-container">
        <FocusCard />
      </main>
    </>
  );
}

export default MainPage;
