import "./index.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import logoLine from "../../../images/logoLine.png";
import logoS from "../../../images/logoS.png";
import logoL from "../../../images/logoL.png";

export default function Logo() {
  const shape = useRef();
  const line = useRef();
  const logoLetters = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    //
    var tl = gsap.timeline();

    tl.fromTo(
      shape.current,
      { drawSVG: "50%" },
      { duration: 1, drawSVG: "50% 50%", stagger: 0.1 }
    ).to(shape.current, { duration: 5, drawSVG: true, stagger: 0.1 });
    tl.fromTo(
      line.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
    tl.fromTo(
      logoLetters.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  return (
    <div className="logo-container">
      <div className="logo-group">
        <div ref={logoLetters}>
          <img src={logoS} alt="logo-S" className="logo-S" />
          <img src={logoL} alt="logo-L" className="logo-L" />
        </div>
        <img src={logoLine} alt="logo-line" className="logo-line" ref={line} />
      </div>

      <div className="shape">
        <svg
          className="shape"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="750px"
          height="750px"
          viewBox="0 0 512 512"
          stroke-width="2px"
          stroke="black"
          fill="none"
        >
          <path
            ref={shape}
            d="M96.5 15.7563L161 73V215.5L81 286.5L1 215.5V73L81 2L96.5 15.7563ZM96.5 15.7563L31 73V215.5L111.5 286.5L191.5 215.5V73L113 2L96.5 15.7563Z"
          />
        </svg>
      </div>
    </div>
  );
}
