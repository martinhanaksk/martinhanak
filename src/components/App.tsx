import React from "react";
import Navbar from "./Navbar.tsx";
import Introduction from "./Introduction.tsx";
import About from "./About.tsx";
import Education from "./Education.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";
import "../assets/css/style.scss";

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