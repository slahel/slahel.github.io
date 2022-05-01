import "./index.scss";
import sketch from "../../images/pic-profile-sketch.png";

import picBack from "../../images/undraw_web_development.svg";
// import photo from "../../images/imagePROFILE.png";

export default function About() {
  return (
    <div className="container about-page">
      <div className="text-side">
        <h1>About Me</h1>
        <p>
          I'm a frontend developer looking for an opportunity in an IT
          company. Previously I mostly worked in Sales and Marketing in the
          industries of hospitality and tourism.
        </p>
        <p>
          The Covid-19 crisis pushed me to have a big reflection on my career.
          After meeting with a programmer student, we talked about the lack of
          female programmers, it inspired me in getting a new direction and
          become a part of the solution.
        </p>
        <p>
          My past experiences have been very eventful and instructive. My roles
          were client-facing, they taught me a lot about consumer expectations
          and behaviours. I also developed skills to analyse unexpected events
          and then adapt in a very short span of time while including the team
          with me.
        </p>
        <p>
          If I need to define myself in a few words, I am a naturally curious
          and eager learner, I am also a team player that rarely shies in front
          of a challenge. Please check my{" "}
          <a
            href="https://www.linkedin.com/in/stephanie-lahellec-a2893411a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn{" "}
          </a>
          profile for more details.
        </p>
      </div>
      <div className="pic-side">
        <img src={sketch} alt="profile" className="sketch" />
        <img src={picBack} alt="programer" className="pic-back" />
      </div>
      {/* <img src={photo} alt="photo" className="photo" /> */}
    </div>
  );
}
