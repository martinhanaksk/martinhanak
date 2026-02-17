import React from "react";
import Navbar from "./navbar";
import Introduction from "./introduction";
import About from "./about";
import Education from "./education";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import "../public/assets/css/style.scss";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Introduction />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;