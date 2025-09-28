import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "../public/assets/css/style.scss";
import contact from "../public/assets/img/contact.svg";
import me from "../public/assets/img/me.png";
import coding from "../public/assets/img/coding.svg";
import spsepo from "../public/assets/img/spsepo.png";
import vutfit from "../public/assets/img/vutfit.png";
import python from "../public/assets/img/python.svg";
import sql from "../public/assets/img/sql.svg";
import java from "../public/assets/img/java.svg";
import js from "../public/assets/img/js.svg";
import dart from "../public/assets/img/dart.svg";
import html5 from "../public/assets/img/html5.svg";
import css from "../public/assets/img/css3.svg";
import coding2 from "../public/assets/img/coding2.svg";
import projectds from "../public/assets/img/project-ds.png";
import projectlibrary from "../public/assets/img/project-library.png";
function App() {
  const texts = ["Hi!,", "I am Martin Hanák,", "Web developer."];

  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex >= texts.length) return;

    const currentFullText = texts[currentTextIndex];

    if (currentCharIndex < currentFullText.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + currentFullText[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, 40);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + "<br>");
        setCurrentTextIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 30);

      return () => clearTimeout(timer);
    }
  }, [currentTextIndex, currentCharIndex]);
  //form handling
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_8kksrcn", "template_lv61f7k", form.current, {
          publicKey: "F5C7U01qE60SlfeqA",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="x" id="x" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>

            <ul className="menu-items">
              <li>
                <Link to="about" smooth={true} duration={100} offset={-70}>
                  <i className="fa fa-solid fa-user menuItems"></i>About
                </Link>
              </li>
              <li>
                <Link to="education" smooth={true} duration={100} offset={-70}>
                  <i className="fa fa-solid fa-graduation-cap"></i>Education
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={100} offset={-70}>
                  <i className="fa fa-solid fa-code bold"></i>Skills
                </Link>
              </li>
              <li>
                <Link to="work" smooth={true} duration={100} offset={-70}>
                  <i className="fa fa-solid fa-heart"></i>Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={100} offset={70}>
                  <i className="fa fa-solid fa-phone"></i>KKKontact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="wrapper">
        <section id="introduction" className="section">
          <h1
            id="intro-text"
            dangerouslySetInnerHTML={{ __html: typedText }}
          ></h1>
          <div id="img-of-me-wrapper">
            <img id="img-of-me" src={me} alt="martin" />
          </div>
        </section>

        <section id="about" className="section">
          <div id="right-about">
            <h1 id="about-title">About me</h1>
            <ul id="about-list">
              <li>🎓 IT student focused on building user-friendly websites and applications</li>
              <li>💡 Passionate about solving real-world problems with meaningful projects</li>
              <li>🔧 Always learning and exploring new technologies</li>
              <li>🤝 Enjoy collaborating — teamwork drives innovation and growth</li>
              <li>🥋 Active lifestyle through fitness and martial arts</li>
              <li>🌍 Love traveling and discovering new cultures</li>
            </ul>
          </div>
          <div id="img-about-wrapper">
            <img id="img-about" src={coding} alt="coding" />
          </div>
        </section>

        <section id="education" className="section">
          <h1 id="education-title">Education</h1>
          <div className="education-wrapper">
            <div className="school-info">
              <a className="link-to-school" href="https://www.spse-po.sk/">
                <img
                  className="institution-img"
                  src={spsepo}
                  alt="spse po"
                />
              </a>
              <div className="left-education">
                <h2 className="institution-name">SPŠE PO</h2>
                <h3 className="field-of-study">
                  Information and Network Technologies
                </h3>
              </div>
              <h3 className="year-of-study">2019 - 2023</h3>
            </div>
            <div className="school-info">
              <a className="link-to-school" href="https://www.fit.vut.cz/.en">
                <img
                  className="institution-img"
                  src={vutfit}
                  alt="vut fit"
                />
              </a>
              <div className="left-education">
                <h2 className="institution-name">
                  Brno university of technology
                </h2>
                <h3 className="field-of-study">Bachelor of IT</h3>
              </div>
              <h3 className="year-of-study">2023 - now</h3>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h1 id="skills-title">Skills</h1>
          <div id="skills-wrapper">
            <div className="skills-images">
              <h2 className="skills-header-title">My languages:</h2>
              <div className="skill-item">
                <p className="language-name">Dart</p>
                <img
                  className="skill-img-special"
                  src={dart}
                  alt="dart"
                />
              </div>
              <div className="skill-item">
                <p className="language-name">JavaScript</p>
                <img className="skill-img" src={js} alt="js" />
              </div>
              <div className="skill-item">
                <p className="language-name">Python</p>
                <img
                  className="skill-img"
                  src={python}
                  alt="python"
                />
              </div>
              <div className="skill-item">
                <p className="language-name">Java</p>
                <img
                  className="skill-img"
                  src={java}
                  alt="java"
                />
              </div><div className="skill-item">
                <p className="language-name dots">...</p>
              </div>

            </div>

            <div className="skills-images">
              <h2 className="skills-header-title">I also know:</h2>
              <div className="skill-item">
                <p className="language-name">Html</p>
                <img
                  className="skill-img"
                  src={html5}
                  alt="html"
                />
              </div>
              <div className="skill-item">
                <p className="language-name">Css</p>
                <img
                  className="skill-img"
                  src={css}
                  alt="css"
                />
              </div>

              <div className="skill-item">
                <p className="language-name">Sql</p>
                <img className="skill-img" src={sql} alt="sql" />
              </div>
              <div className="skill-item">
                <p className="language-name dots">...</p>
              </div>
            </div>
          </div>
          <img id="image-coding" src={coding2} alt="coding" />
        </section>

        <section id="work" className="section">
          <h1 id="work-title">Projects</h1>
          <div className="work-projects">
            <a
              className="work-project-link"
              href="https://github.com/tigonsk/DominusSilvestris/"
            >
              <div className="work-project-item">
                <div className="image-container">
                  <img
                    className="work-project-item-img"
                    src={projectds}
                    alt="nature"
                  />
                </div>
                <div className="content-project-item">
                  <h3>Dominus Silvestris</h3>
                  <p>
                    A custom e-commerce website designed to represent my
                    father's business and sell his nature-based products from
                    the forest. The platform will focus on merchandising
                    mushrooms, small trees, and other forest-sourced items
                    through an easy-to-navigate online store.
                  </p>
                </div>
              </div>
            </a>
            <a
              className="work-project-link"
              href="https://github.com/tigonsk/libraryapp/tree/master"
            >
              <div className="work-project-item">
                <div className="image-container">
                  <img
                    className="work-project-item-img"
                    src={projectlibrary}
                    alt="library app"
                  />
                </div>
                <div className="content-project-item">
                  <h3>Library App</h3>
                  <p>
                    Mobile application for managing and borrowing books from a
                    library, with user authentication and search features.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section id="contact" className="section">
          <h1 id="contact-title">Contact</h1>

          <form className="form" ref={form} onSubmit={sendEmail}>
            <input
              type="name"
              id="form-name"
              name="user_name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              id="form-email"
              placeholder="Your E-mail"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your message"
              id="form-message"
              name="message"
              required
            />
            <div id="button-wrapper">
              <input type="submit" id="form-submit" value="Send" />
            </div>
          </form>
          <img id="img-contact" src={contact} alt="contact" />
        </section>
      </div>
    </>
  );
}

export default App;
