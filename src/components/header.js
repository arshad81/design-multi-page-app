import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo-dark.png";
import hamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";

import { useState } from "react";
import { act } from "react-dom/test-utils";

export default function Navbar() {
  const [toggle,setToggle] = useState(false);
  const menuIcon = toggle ? closeIcon : hamburgerIcon
  return (
    <div className="relative">
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
            className="w-6 h-auto sm:hidden cursor-pointer"
            src={menuIcon}
            alt="Logo"
            onClick={()=>setToggle(!toggle)}
          ></img>
        </div>
      </div>
      <div className={`${toggle ? "h-[256px] ":"h-0"} bg-black text-white absolute top-[100px] z-20 w-full transition-all duration-150 sm:hidden`}>
        <ul className={`${toggle ? "delay-100 ": "opacity-0"} lg:hidden px-6 py-12 transition-all duration-100`}>
          <li className="text-2xl font-medium hover:underline underline-offset-4 cursor-pointer mb-8">
            <Link to="/about">OUR COMPANY</Link>
          </li>
          <li className="text-2xl font-medium hover:underline underline-offset-4 cursor-pointer my-8">
            <Link to="/location">LOCATIONS</Link>
          </li>
          <li className="text-2xl font-medium hover:underline underline-offset-4 cursor-pointer mt-8">
            <Link to="/contactus">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
