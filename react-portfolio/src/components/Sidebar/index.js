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
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Sidebar() {
  // const [showMenu, setShowMenu] = useState(false);

  /* Open when someone clicks on the span element */
  function openNav() {
    document.getElementsByClassName("myNav").style.width = "100%";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementsByClassName("myNav").style.width = "0%";
  }
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      {/* <nav className={showMenu ? "mobile-menu" : ""}> */}
      <nav className="myNav">
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
        <FontAwesomeIcon
          icon={faClose}
          color="white"
          size="3x"
          // onClick={() => setShowMenu(false)}
          onClick={() => closeNav()}
          className="close-link"
        />
      </nav>
      <a href="javascript:void(0)">
        <FontAwesomeIcon
          icon={faBars}
          color="white"
          size="3x"
          // onClick={() => setShowMenu(true)}
          onClick={() => openNav()}
          className="hamburger-link"
        />
      </a>
    </div>
  );
}
