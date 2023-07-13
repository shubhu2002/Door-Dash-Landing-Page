import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex justify-around flex-col md:flex-row gap-y-10 items-center py-24">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl">Contact Us From Here</h1>
        <h3 className="text-gray-400">
          Get our monthly free trial subscription !!
        </h3>
      </div>
      <div className="flex gap-x-[30px] gap-y-4 ">
        <button className=" bg-btnClr px-4 py-3 text-white rounded-3xl text-sm">
          Learn More
        </button>
        <button className="flex items-center gap-2 text-black px-4 py-1 rounded-3xl text-sm border border-gray-400">
          Request Demo <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Contact;
