import "./index.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="homepage container">
      <div className="text-side">
        <h1 className="home-title">
          Hello everyone <br /> I'm Stephanie
        </h1>
        <h2>Web Developer | Front End Developer</h2>
        {/* <h4>
          Welcome to my portfolio! I'm a former Sales and Marketing Manager
          seeking opportunities in the Tech Industry.
        </h4> */}
        <Link to="/contact" className="contact-button">
          Contact Me
        </Link>
      </div>
      <Logo />
      <footer>
        <div className="icons-group">
          {" "}
          <a href="https://github.com/slahel" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="white" className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/stephanie-lahellec-a2893411a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="white" className="icon" />
          </a>
        </div>
        <Link to="/contact">
          <div className="next-page">
            <span>Next Page</span>
            <br />
            <FontAwesomeIcon
              icon={faChevronDown}
              color="white"
              className="icon"
            />
          </div>
        </Link>
      </footer>
    </div>
  );
}
