import React from "react";
import "./App.css";
import SolutionSection from "./Component/SolutionSection";
/* import { Nav } from "./Component/Navbar"; */ {
  /* <Nav/> */
}
import ExperianceSection from "./Component/ExperianceSection";
import BlogSection from "./Component/BlogSection";
import Testimonials from "./Component/Testimonials";

function App() {
  return (
    <React.Fragment>
      <div className="max-w-[1400px] mx-auto md:px-10 px-5">
        <SolutionSection />
        <ExperianceSection/>
        <BlogSection/>
        <Testimonials/>
      </div>
    </React.Fragment>
  );
}

export default App;
