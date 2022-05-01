import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router";
import logo from "../../images/Vector.svg";

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
      <img src={logo} alt="logo" className="logo-faded" />
    </div>
  );
}
