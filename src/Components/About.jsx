import React from "react";
import aboutImg from "../assets/et.png"

const About = () => {
  return (
    <div className="w-[90%] bg-primary flex flex-col md:flex-row items-center justify-around py-12 px-4 mx-auto rounded-3xl">
      <div className="flex flex-col items-center text-center md:items-start md:text-start">
        <h2 className="max-w-[400px] text-sky-950">Find Out A Little More About Us</h2>
        <h4 className="max-w-[380px] ">
          We are company dedicated to the distribution of products by deilvery
          to your home or place the place where you are , with the best qualtiy
          of delivery.
        </h4>
      </div>
      <div>
        <img src={aboutImg} alt="img" />
      </div>
    </div>
  );
};

export default About;
