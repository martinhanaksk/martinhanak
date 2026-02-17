import React from "react";
import me from "../../public/assets/img/me.png";
import useTypewriter from "../UseTypewriter";

const INTRO_LINES = ["Hi!,", "I am Martin Hanák,", "Web developer."];

const Introduction: React.FC = () => {
  const typedText = useTypewriter(INTRO_LINES);

  return (
    <section id="introduction" className="section">
      <h1
        id="intro-text"
        dangerouslySetInnerHTML={{ __html: typedText }}
      />
      <div id="img-of-me-wrapper">
        <img id="img-of-me" src={me} alt="Martin Hanák" />
      </div>
    </section>
  );
};

export default Introduction;