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
          I'm very ambitious front-end developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in a few words a novice ukulele player
          photography enthusiast, and tech-obsessed. Please check my Linked In
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
