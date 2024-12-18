import React from "react";
import "./App.css";
import SolutionSection from "./Component/SolutionSection";
/* import { Nav } from "./Component/Navbar"; */ {
  /* <Nav/> */
}
import ExperianceSection from "./Component/ExperianceSection";
import BlogSection from "./Component/BlogSection";
import Testimonials from "./Component/Testimonials";
import MapSection from "./Component/MapSection";
import Footer from "./Component/Footer";
import SliderSection from "./Component/SliderSection";
import HeroSection from "./Component/HeroSection";

function App() {
  return (
    <React.Fragment>
      <main className="app-container">
        <div className=" max-w-[1400px] mx-auto md:px-10 px-5">
          {/* app-container */}
          <HeroSection />
          <SliderSection />
          <SolutionSection />
          <ExperianceSection />
          <BlogSection />
          <Testimonials />
          <MapSection />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
