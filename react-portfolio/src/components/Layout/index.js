import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router";
//import logo from "../../images/Vector.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEnvelope, faGear } from "@fortawesome/free-solid-svg-icons";

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
      {/* <img src={logo} alt="logo" className="logo-faded" /> */}
      <footer>
        {/* <a href="/myworks" className="footer-as">
          My Works
        </a>
        <a to="/skills" className="footer-as">
          My Skills
        </a>
        <a to="/contact" className="footer-as">
          Contact Me
        </a> */}
      </footer>
    </div>
  );
}
