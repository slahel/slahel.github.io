import "./index.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
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
// import GreenSock from "../../images/greensock_logo_icon_145217.svg";

export default function Skills() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.fromTo(
      q(".brand-icon"),
      { opacity: 0, scale: 0.1 },
      {
        delay: 1,
        opacity: 0.8,
        scale: 1,
        duration: 2,

        stagger: {
          amount: 1,
          grid: "auto",
          from: "center",
        },
      }
    );
  }, [q]);

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
          These different formations allowed me to learn techniques with
          different approaches, so I could get well-rounded and adaptable.
        </p>
        <p>
          I studied{" "}
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
          profile for more or you can check out my cv at this link.
        </p>
      </div>

      <div className="icon-group" ref={el}>
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
