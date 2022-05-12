import "./index.scss";
import QuizApp from "../../images/apps/quiz.png";
import DicoApp from "../../images/apps/dictionary.png";
import MemeApp from "../../images/apps/meme-generator.png";
import JournalApp from "../../images/apps/travel-journal.png";
import WeatherApp from "../../images/apps/weather.png";
import CardApp from "../../images/apps/business-card.png";

export default function MyWorks() {
  return (
    <div className="container">
      <div className="text-center ">
        <h1>My Work</h1>
        <p>
          You can find examples of my previous work below, and also on my{" "}
          <a href="https://github.com/slahel" target="_blank" rel="noreferrer">
            Github
          </a>{" "}
          profile
        </p>
      </div>
      <ul className="portfolio">
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
