import React, { useEffect } from "react";

import "./index.css";
import FocusCard from "../../components/focus-card";
import CarouselHero from "../../components/carousel-hero";

function MainPage() {
  return (
    <div id="home">
      <CarouselHero />

      <main className="general-container">
        <FocusCard />
      </main>
    </div>
  );
}

export default MainPage;
