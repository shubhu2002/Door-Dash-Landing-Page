import React from "react";
import frontImg from "../assets/g.webp";

const Hero = () => {
  return (
    <div className="w-full flex items-center md:flex-row flex-col py-12 ">
      <div>
        <img src={frontImg} alt="" />
      </div>
      <div className="flex flex-col items-center md:items-start text-center md:text-start ">
        <h1 className="max-w-[520px] ">Order Product Faster Easier</h1>
        <h4 className="max-w-[380px]">
          Order your favourite food anytime and we will deliver them right to
          where you are.
        </h4>
        <button className="flex items-center bg-btnClr px-5 py-2 text-white rounded-3xl text-md mt-4 ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
