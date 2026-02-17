import React from "react";
import coding from "../../public/assets/img/coding.svg";

const ABOUT_ITEMS = [
  { emoji: "🎓", text: "IT student focused on building user-friendly websites and applications" },
  { emoji: "💡", text: "Passionate about solving real-world problems with meaningful projects" },
  { emoji: "🔧", text: "Always learning and exploring new technologies" },
  { emoji: "🤝", text: "Enjoy collaborating — teamwork drives innovation and growth" },
  { emoji: "🥋", text: "Active lifestyle through fitness and martial arts" },
  { emoji: "🌍", text: "Love traveling and discovering new cultures" },
];

const About: React.FC = () => (
  <section id="about" className="section">
    <div className="about-wrapper">
      <div id="right-about">
        <h1 id="about-title">About me</h1>
        <ul id="about-list">
          {ABOUT_ITEMS.map(({ emoji, text }) => (
            <li key={text}>
              {emoji} {text}
            </li>
          ))}
        </ul>
      </div>
      <img id="img-about" src={coding} alt="coding illustration" />
    </div>
  </section>
);

export default About;