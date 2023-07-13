import React, { useState } from "react";
import logo from "../assets/i.png";
import { BsArrowRight } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const navigationData = [
  {
    name: "Deliver",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Feature",
    href: "#",
  },
  {
    name: "Sign Up",
    href: "#",
  },
];

const Header = () => {
  const [header, setHeader] = useState(false);
  return (
    <div className="w-full relative top-0 left-0 right-0 p-4">
      <div className="w-full flex items-center justify-between">
        <div className="w-[40%] md:w-[30%] lg:w-[40%] md:ml-10">
          <a href="http://localhost:3000/">
            <img src={logo} alt="front" className="w-12 h-12" />
          </a>
        </div>

        <div className="w-full lg:w-[60%] flex items-center max-h-42 absolute md:static left-0 top-24 ">
          <ul
            className={`${
              header ? "max-h-42 flex" : "max-h-0 hidden md:flex"
            } w-full flex-col md:flex-row items-center bg-[rgba(255,255,255,0.95)] md:bg-inherit`}
          >
            {navigationData.map((item, index) => {
              return (
                <li key={index} className="py-2 px-5 md:px-3 lg:px-5">
                  <a href={item.href} className=" font-Poppins tracking-wide">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="w-40 md:w-60 lg:w-48 h-10 justify-center flex items-center gap-2 bg-btnClr text-white rounded-3xl text-sm mr-4">
          Request Demo <BsArrowRight className="text-lg" />
        </button>
        <div
          onClick={() => setHeader(!header)}
          className="cursor-pointer md:hidden text-2xl"
        >
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Header;
