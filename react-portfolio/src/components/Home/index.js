import "./index.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Home() {
  return (
    <div className="homepage container">
      <div className="text-side">
        <h1 className="home-title">
          Hello everyone <br /> I'm Stephanie
        </h1>
        <h2>Web Developer | Front End Developer</h2>
        <h4>
          Welcome to my portfolio! I'm a former Sales and Marketing Manager
          seeking opportunities in the Tech Industry.
        </h4>
        <Link to="/contact" className="contact-button">
          Contact Me
        </Link>
      </div>
      <Logo />
    </div>
  );
}
