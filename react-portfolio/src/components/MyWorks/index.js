import "./index.scss";
import QuizApp from "../../images/apps/quiz.png";
import DicoApp from "../../images/apps/dictionary.png";
import MemeApp from "../../images/apps/meme-generator.png";
import JournalApp from "../../images/apps/travel-journal.png";
import WeatherApp from "../../images/apps/weather.png";
import CardApp from "../../images/apps/business-card.png";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function MyWorks() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.fromTo(
      q(".app"),
      { opacity: 0, scale: 0.1 },
      {
        delay: 1,
        opacity: 1,
        scale: 1,
        duration: 2,
        stagger: 0.25,
      }
    );
  }, [q]);

  return (
    <div className="container">
      <div className="text-center ">
        <h1>My Works</h1>
        <p>
          Please check out my previous works, you can also have a look at my
          <a href="https://github.com/slahel" target="_blank" rel="noreferrer">
            {" "}
            Github{" "}
          </a>
          profile
        </p>
      </div>
      <ul className="portfolio" ref={el}>
        <div className="app weather">
          <a
            href="https://fervent-gates-1fb2e1.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={WeatherApp} alt="weather-app" />
          </a>
        </div>

        <div className="app dico">
          <a
            href="https://clever-jones-ffe5aa.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={DicoApp} alt="dictionary-app" />
          </a>
        </div>
        <div className="app journal">
          {" "}
          <a
            href="https://pedantic-kare-24100d.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={JournalApp} alt="travel-journal-app" />
          </a>
        </div>
        <div className="app quiz">
          {" "}
          <a
            href="https://tourmaline-bublanina-b991cb.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={QuizApp} alt="quiz-app" />
          </a>
        </div>
        <div className="app card">
          {" "}
          <a
            href="https://lucid-borg-4eb36c.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={CardApp} alt="business-card-app" />
          </a>{" "}
        </div>
        <div className="app meme">
          {" "}
          <a
            href="https://admirable-fairy-dedb46.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={MemeApp} alt="meme-genrator-app" />
          </a>
        </div>
      </ul>
    </div>
  );
}
