import React from "react";
import python from "../../public/assets/img/python.svg";
import sql from "../../public/assets/img/sql.svg";
import java from "../../public/assets/img/java.svg";
import js from "../../public/assets/img/js.svg";
import dart from "../../public/assets/img/dart.svg";
import html5 from "../../public/assets/img/html5.svg";
import css from "../../public/assets/img/css3.svg";
import coding2 from "../../public/assets/img/coding2.svg";

interface Skill {
  name: string;
  src?: string;
  alt?: string;
  className?: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "My languages:",
    skills: [
      { name: "Dart", src: dart, alt: "dart", className: "skill-img-special" },
      { name: "JavaScript", src: js, alt: "js", className: "skill-img" },
      { name: "Python", src: python, alt: "python", className: "skill-img" },
      { name: "Java", src: java, alt: "java", className: "skill-img" },
      { name: "...", className: "dots" },
    ],
  },
  {
    title: "I also know:",
    skills: [
      { name: "HTML", src: html5, alt: "html", className: "skill-img" },
      { name: "CSS", src: css, alt: "css", className: "skill-img" },
      { name: "SQL", src: sql, alt: "sql", className: "skill-img" },
      { name: "...", className: "dots" },
    ],
  },
];

const SkillItem: React.FC<Skill> = ({ name, src, alt, className }) => (
  <div className="skill-item">
    <p className={`language-name${className === "dots" ? " dots" : ""}`}>{name}</p>
    {src && <img className={className} src={src} alt={alt} />}
  </div>
);

const Skills: React.FC = () => (
  <section id="skills" className="section">
    <h1 id="skills-title">Skills</h1>
    <div id="skills-wrapper">
      {SKILL_GROUPS.map(({ title, skills }) => (
        <div className="skills-images" key={title}>
          <h2 className="skills-header-title">{title}</h2>
          {skills.map((skill) => (
            <SkillItem key={skill.name} {...skill} />
          ))}
        </div>
      ))}
    </div>
    <img id="image-coding" src={coding2} alt="coding illustration" />
  </section>
);

export default Skills;