import React from "react";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
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