import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo-dark.png";
import hamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 sm:px-0 py-9 md:py-16">
      <Link to="/">
        <img className="w-52 h-auto" src={logo} alt="Logo"></img>
      </Link>
      <div>
        <ul className="hidden sm:flex justify-between gap-10">
          <li className="text-stiletto text-sm hover:underline underline-offset-4 cursor-pointer">
            <Link to="/about">OUR COMPANY</Link>
          </li>
          <li className="text-stiletto text-sm hover:underline underline-offset-4 cursor-pointer">
            <Link to="/location">LOCATIONS</Link>
          </li>
          <li className="text-stiletto text-sm hover:underline underline-offset-4 cursor-pointer">
            <Link to="/contactus">CONTACT US</Link>
          </li>
        </ul>
        <img
          className="w-6 h-auto sm:hidden"
          src={hamburgerIcon}
          alt="Logo"
        ></img>
      </div>
    </div>
  );
}
