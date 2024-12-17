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

function App() {
  return (
    <React.Fragment>
      <div className=" max-w-[1400px] mx-auto md:px-10 px-5">{/* app-container */}
        {/* <div className="grid-background"></div> */}
        <SolutionSection />
        <ExperianceSection/>
        <BlogSection/>
        <Testimonials/>
        <MapSection/>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
