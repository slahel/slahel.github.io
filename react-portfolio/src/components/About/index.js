import "./index.scss";
import sketch from "../../images/pic-profile-sketch.png";
import picBack from "../../images/undraw_web_development.svg";

export default function About() {
  return (
    <div className="container about-page">
      <div className="text-side">
        <h1>About Me</h1>
        <p>
          I'm a front-end developer looking for an opportunity in a tech
          company. Previously, I worked in Sales and Marketing in the industries
          of hospitality and tourism.
        </p>
        <p>
          The Covid-19 pandemic pushed me to reflect on my career and where I
          see myself in 10 years time. After meeting with a programmer student
          and discussing the lack of female developers in the industry, I was
          inspired to take a new direction and become part of the solution.
          Moreover, programming seemed like an incredible opportunity to embrace
          a new career in an engaging and fast-growing field.
        </p>
        <p>
          My past professional experiences have been very formative. My
          roles were client-facing, so they taught me a lot about consumer
          expectations and behaviours. Being in high-pressure environments, I
          also developed skills that enabled me to analyse and adapt to
          unexpected events in a very short span of time. I finally learned the
          importance of listening and communicating clearly with my colleagues
          to implement a more efficient work environment.
        </p>
        <p>
          If I had to describe myself in a few words, I would say that I am a
          naturally curious and eager learner, and I am a team player who rarely
          shies away from a challenge. Please check my{" "}
          <a
            href="https://www.linkedin.com/in/stephanie-lahellec-a2893411a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          profile or my{" "}
          <a
            href="https://drive.google.com/file/d/1IUJ8PGNuffSiDOhcpvv0Wvl7mRqZzCz5/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>{" "}
          for more details.
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
