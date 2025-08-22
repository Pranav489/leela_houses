import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import OurFeatured from "./OurFeatured";
import Gallery from "./Gallery";
import TestimonialSection from "./TestimonialSection";
import SEO from "../../components/SEO";

function Home() {
  return (
    <div>
      <SEO title = "Leela Farmhouse | Luxury Farmhouse Resort Near Pune" description="Escape to Leela Farmhouse, a luxury farmhouse resort near Nashik. Experience peaceful stays, organic dining, and nature-filled activities for a perfect getaway."/>
      <HeroSection />
      <AboutSection />
      <OurFeatured />
      <Gallery />
      <TestimonialSection />
    </div>
  );
}

export default Home;
