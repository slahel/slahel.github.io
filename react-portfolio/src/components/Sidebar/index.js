import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/LogoLC.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEye,
  faEnvelope,
  faGear,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="myworks-link"
          to="/myworks"
        >
          <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <NavLink
        exact="true"
        activeclassname="active"
        className="hamburger-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faBars} color="white" />
      </NavLink>
    </div>
  );
}
