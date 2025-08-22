import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import OurFeatured from "./OurFeatured";
import Gallery from "./Gallery";
import TestimonialSection from "./TestimonialSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <OurFeatured />
      <Gallery />
      <TestimonialSection />
    </div>
  );
}

export default Home;
