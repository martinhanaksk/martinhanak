import React from "react";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "../assets/style.scss";

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