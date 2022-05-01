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
} from "@fortawesome/free-brands-svg-icons";
import VsCodelogo from "../../images/icons8-visual-studio-100.png";
import GreenSock from "../../images/greensock_logo_icon_145217.svg";

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
          I started my training with SheCodes bootcamp, where I learned
          HTML,CSS, JavaScript and React. I then perfected it with some course
          on FreeCode Camp. Then carry on my React training with Scrimba course.
        </p>
        <p>
          Nec feugiat nisl pretium fusce id velit ut tortor. Pretium viverra
          suspendisse potenti nullam ac tortor vitae purus. Elit sed vulputate
          mi sit amet mauris commodo quis imperdiet. Libero justo laoreet sit
          amet cursus sit.
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
        <img src={GreenSock} className="brand-icon greenSock" alt="greenSock" />
      </div>
    </div>
  );
}
