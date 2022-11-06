import "./index.scss";
//import { useRef } from "react";
//import emailjs from "@emailjs/browser";
import emailPic from "../../images/undraw_personal_email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  // const form = useRef();

  // function sendEmail(event) {
  //   event.preventdefault();

  //   emailjs
  //     .sendForm(
  //       "service_6i2dzre",
  //       "template_7sbf8dc",
  //       form.current,
  //       "8RWyIM3QRIyTNDw9z"
  //     )
  //     .then(
  //       () => {
  //         alert("Message successfully sent!");
  //         window.location.reload(false);
  //       },
  //       () => {
  //         alert("Failed to send the message, please try again");
  //       }
  //     );
  // }

  return (
    <div className="container">
      <div className="text-side">
        <h1>Contact Me</h1>
        <p>
          I am currently open to opportunities, if you'd like to get in touch,
          please don't hesitate to contact me by email or through my social
          media.
        </p>
        <h3>
          <a
            href="mailto:Steph.lahellec@gmail.com"
            rel="noreferrer"
            className="email"
          >
            Steph.lahellec@gmail.com
          </a>
        </h3>
        {/* <div className="contact-form ">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="contact-info">
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                  className="contact-info"
                />
              </li>
              <li className="contact-info">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                  className="contact-info"
                />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="submit-button" value="Send" />
              </li>
            </ul>
          </form>
        </div> */}
      </div>
      <div className="social-media">
        <h2>
          {" "}
          Stephanie Lahellec
          <br />
          LONDON
        </h2>
        <br />
        <div className="icons-group">
          {" "}
          <a href="https://github.com/slahel" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              className="icon github"
            />
          </a>
          <span href="/" target="_blank" rel="noreferrer" className="discord">
            <FontAwesomeIcon
              icon={faDiscord}
              color="white"
              className="icon discord"
            />
          </span>
          <a
            href="https://www.linkedin.com/in/stephanie-lahellec-a2893411a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="white"
              className="icon linkedin"
            />
          </a>
        </div>
      </div>
      <img src={emailPic} alt="email" className="email-pic" />
    </div>
  );
}
