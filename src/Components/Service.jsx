import React from "react";
import { BsArrowRight } from "react-icons/bs";
import temp from "../assets/et.png";

const ServiceCatogries = (props) => {
  return (
    <div className="bg-secondary w-72 h-48 flex items-center justify-center rounded-3xl">
      <div className="flex flex-col text-start max-w-[190px] lg:max-w-[220px] relative left-8 px-2">
        <img
          src={temp}
          alt="img"
          className=" w-28 h-28 absolute left-[-120px]"
        />
        <h4 className="font-Belanosima my-1 text-sky-950">{props.heading}</h4>
        <h5>{props.text}</h5>
        <button className="flex items-center gap-2 font-semibold ">
          Learn More <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="w-full flex flex-col items-center py-12">
      <div className="flex flex-col text-center px-4 ">
        <h1 className="text-4xl md:text-5xl">Some Services We Offer</h1>
        <h4 className="max-w-[600px]">
          With our app you can view the route of your order, from our local
          headquaters to the place where you are. Look at the app now !
        </h4>
      </div>

      <div className="w-full md:w-[85%] lg:w-[55%] flex my-12 md:justify-between flex-col md:flex-row items-center md:flex-wrap gap-y-16">
        <ServiceCatogries
          heading="Payment Done"
          text="Pay with card,cash,net banking or upi without much ado"
        />
        <ServiceCatogries
          heading="Live Order Tracking"
          text="Know where your order is at all times, from the us to your doorstep"
        />
        <ServiceCatogries
          heading="No Minimum Order"
          text="Order in for yourself or for the group, with no restrictions on order value"
        />
        <ServiceCatogries
          heading="User Reviews"
          text="We offer user reviews to enhance credibility "
        />
      </div>
    </div>
  );
};

export default Service;
