import React from "react";
import logo from "../assets/i.png";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const company = [
  { name: "About Us" },
  { name: "Teams" },
  { name: "Features" },
  { name: "Carrers" },
];
const contact = [
  { name: "Help & Support" },
  { name: "Sign Up" },
  { name: "Partner With Us" },
  { name: "Reports" },
];
const legal = [
  { name: "Privacy Policy" },
  { name: "Cookies Policy" },
  { name: "Offer Terms" },
  { name: "Terms & Conditions" },
];

const Footer = () => {
  return (
    <div className="pt-12 w-full  flex flex-col px-1">
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <h3>Company</h3>
          <ul className="flex gap-y-5 my-5 md:my-8 flex-col items-center">
            {company.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3>Contact</h3>
          <ul className="flex gap-y-5 my-5 md:my-8 flex-col items-center">
            {contact.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3>Legal</h3>
          <ul className="flex gap-y-5 my-5 md:my-8 flex-col items-center">
            {legal.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>

      <hr className="bg-black h-[2px] w-[90%] mx-auto " />

      <div className="w-full flex justify-around  py-4 gap-y-5">
        <div className="flex flex-col gap-x-4 gap-y-1">
          <a
            href="http://localhost:3000/"
            className="flex items-center gap-x-3"
          >
            <img src={logo} alt="front" className="w-12 h-12" />
            <h3>Door Dash</h3>
          </a>
          <h4 className="my-0">info.doordash@gmail.com</h4>
          <h4 className="my-0">+12048790 </h4>
        </div>
        <div className="flex flex-col mt-2 gap-y-3">
          <h3 className="text-center hidden md:block"> Social Media</h3>
          <div className="flex gap-x-7 justify-center flex-col md:flex-row gap-y-3">
            <a href="/">
              <BsInstagram className="text-2xl hover:animate-bounce" />
            </a>
            <a href="/">
              <BsTwitter className="text-2xl hover:animate-bounce" />
            </a>
            <a href="/">
              <BsFacebook className="text-2xl hover:animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
