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
  const [showMenu, setShowMenu] = useState(false);
  return (
    // function myFunction() {
    //   var x = document.getElementById("myLinks");
    //   if (x.style.display === "block") {
    //     x.style.display = "none";
    //   } else {
    //     x.style.display = "block";
    //   }
    // }

    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className={showMenu ? "mobile-menu" : ""}>
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
          onClick={() => setShowMenu(false)}
          className="close-link"
        />
      </nav>

      <FontAwesomeIcon
        icon={faBars}
        color="white"
        size="3x"
        onClick={() => setShowMenu(true)}
        className="hamburger-link"
      />
    </div>
  );
}
