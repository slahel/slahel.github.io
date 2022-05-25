import "./index.scss";
// import { useEffect, useRef } from "react";
// import gsap from "gsap-trial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faSass,
  faReact,
  faJs,
  faNpm,
  faBootstrap,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import VsCodelogo from "../../images/icons8-visual-studio-100.png";

export default function Skills() {
  return (
    <div className="container">
      <div className="text-side">
        <h1>Skills</h1>
        <p>
          I first started my training with Codecademy and FreeCodecamp courses.
          I then wanted a bit more structure and started a SheCodes Bootcamp.
          Finally, I perfected my React skills with Scrimba.
        </p>
        <p>
          These different studies allowed me to learn techniques with different
          approaches, so I could get well-rounded and adaptable.
        </p>
        <p>
          I code in{" "}
          <span className="skills-name">
            {" "}
            HTML5, CSS3, Sass, JavaScript, React, Figma, Bootstrap, GreenSocks
          </span>
          , and more... Visit my{" "}
          <a
            href="https://www.linkedin.com/in/stephanie-lahellec-a2893411a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          profile for more or you can check out my cv at this{" "}
          <a
            href="https://drive.google.com/file/d/1IUJ8PGNuffSiDOhcpvv0Wvl7mRqZzCz5/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>
          .
        </p>
      </div>

      <div className="icon-group">
        <FontAwesomeIcon
          icon={faHtml5}
          className="brand-icon html"
          alt="html-5"
        />
        <FontAwesomeIcon icon={faCss3} className="brand-icon css" alt="css-3" />
        <FontAwesomeIcon icon={faJs} className="brand-icon js" alt="Js" />
        <FontAwesomeIcon
          icon={faReact}
          className="brand-icon react"
          alt="react"
        />
        <FontAwesomeIcon icon={faSass} className="brand-icon sass" alt="sass" />
        <FontAwesomeIcon icon={faNpm} className="brand-icon npm " alt="npm" />
        <FontAwesomeIcon
          icon={faBootstrap}
          className="brand-icon bootstrap"
          alt="bootstrap"
        />
        <img src={VsCodelogo} className="brand-icon vsCode" alt="VsCode" />
        <FontAwesomeIcon
          icon={faFigma}
          className="brand-icon figma"
          alt="figma"
        />
        {/* <img src={GreenSock} className="brand-icon greenSock" alt="greenSock" /> */}
      </div>
    </div>
  );
}
