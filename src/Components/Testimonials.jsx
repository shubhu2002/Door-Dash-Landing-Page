import React from "react";
import img1 from "../assets/a.webp";

const ReviewDiv  = () => {
  return (
    <div className="bg-white min-w-[300px] md:w-[300px] pr-4 pl-4 py-2 shadow-slate-100  shadow-md">
      <img src={img1} alt="img" className="w-24 pb-2 " />
      <h5 className="text-lg tracking-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi
        suscipit numquam fugiat facere. Provident, id! Temporibus deserunt
        earum, dolore eum voluptatem, obcaecati magni
      </h5>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col py-8 my-12 bg-primary">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl">
          “Your wish, our command”
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-500">
          See what our customers say about Door Dash
        </h2>
      </div>
      <div className="w-screen overflow-scroll flex lg:flex-wrap gap-x-5 gap-y-6 px-2 py-6 lg:justify-evenly">
        <ReviewDiv />
        <ReviewDiv />
        <ReviewDiv />
        <ReviewDiv />
        <ReviewDiv />
        <ReviewDiv />
        <ReviewDiv />
      </div>
    </div>
  );
};

export default Testimonials;
