import React from "react";
import { Link } from "react-scroll";

const NAV_LINKS = [
  { to: "about", icon: "fa-user", label: "About", offset: -70 },
  { to: "education", icon: "fa-graduation-cap", label: "Education", offset: -70 },
  { to: "skills", icon: "fa-code", label: "Skills", offset: -70 },
  { to: "work", icon: "fa-heart", label: "Projects", offset: -70 },
  { to: "contact", icon: "fa-phone", label: "Contact", offset: 70 },
];

const Navbar: React.FC = () => (
  <nav>
    <div className="navbar">
      <div className="container nav-container">
        <input className="checkbox" type="checkbox" name="x" id="x" />
        <div className="hamburger-lines">
          <span className="line line1" />
          <span className="line line2" />
          <span className="line line3" />
        </div>
        <ul className="menu-items">
          {NAV_LINKS.map(({ to, icon, label, offset }) => (
            <li key={to}>
              <Link to={to} smooth duration={100} offset={offset}>
                <i className={`fa fa-solid ${icon}`} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;