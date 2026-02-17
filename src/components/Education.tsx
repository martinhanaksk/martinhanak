import React from "react";
import spsepo from "../../public/assets/img/spsepo.png";
import vutfit from "../../public/assets/img/vutfit.png";

interface EducationEntry {
  href: string;
  imgSrc: string;
  imgAlt: string;
  institutionName: string;
  fieldOfStudy: string;
  years: string;
}

const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    href: "https://www.spse-po.sk/",
    imgSrc: spsepo,
    imgAlt: "SPŠE Prešov",
    institutionName: "SPŠE PO",
    fieldOfStudy: "Information and Network Technologies",
    years: "2019 – 2023",
  },
  {
    href: "https://www.fit.vut.cz/.en",
    imgSrc: vutfit,
    imgAlt: "VUT FIT Brno",
    institutionName: "Brno University of Technology",
    fieldOfStudy: "Bachelor of IT",
    years: "2023 – now",
  },
];

const Education: React.FC = () => (
  <section id="education" className="section">
    <h1 id="education-title">Education</h1>
    <div className="education-wrapper">
      {EDUCATION_ENTRIES.map(({ href, imgSrc, imgAlt, institutionName, fieldOfStudy, years }) => (
        <div className="school-info" key={institutionName}>
          <a className="link-to-school" href={href} target="_blank" rel="noopener noreferrer">
            <img className="institution-img" src={imgSrc} alt={imgAlt} />
          </a>
          <div className="left-education">
            <h2 className="institution-name">{institutionName}</h2>
            <h3 className="field-of-study">{fieldOfStudy}</h3>
          </div>
          <h3 className="year-of-study">{years}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Education;