import React from "react";
import projectds from "../../public/assets/img/project-ds.png";
import projectlibrary from "../../public/assets/img/project-library.png";

interface Project {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    href: "https://github.com/tigonsk/DominusSilvestris/",
    imgSrc: projectds,
    imgAlt: "Dominus Silvestris project",
    title: "Dominus Silvestris",
    description:
      "A custom e-commerce website designed to represent my father's business and sell his nature-based products from the forest. The platform focuses on merchandising mushrooms, small trees, and other forest-sourced items through an easy-to-navigate online store.",
  },
  {
    href: "https://github.com/tigonsk/libraryapp/tree/master",
    imgSrc: projectlibrary,
    imgAlt: "Library App project",
    title: "Library App",
    description:
      "Mobile application for managing and borrowing books from a library, with user authentication and search features.",
  },
];

const Projects: React.FC = () => (
  <section id="work" className="section">
    <h1 id="work-title">Projects</h1>
    <div className="work-projects">
      {PROJECTS.map(({ href, imgSrc, imgAlt, title, description }) => (
        <a className="work-project-link" href={href} key={title} target="_blank" rel="noopener noreferrer">
          <div className="work-project-item">
            <div className="image-container">
              <img className="work-project-item-img" src={imgSrc} alt={imgAlt} />
            </div>
            <div className="content-project-item">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </a>
      ))}
    </div><p className="work-school-note">
      ...and many more — I've built a variety of projects throughout my studies at highschool and university
    </p>
  </section>
);

export default Projects;