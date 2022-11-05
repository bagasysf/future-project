import React from "react";
import { Link } from "react-router-dom";

const HeroButton = () => {
  return (
    <>
      <div className="flex justify-between gap-[20px] pt-[20px] md:pt-0 lg:justify-center lg:gap-[40px]">
        <Link
          to="#"
          className="flex w-full justify-center rounded-xl bg-fp-secondary-40 py-[15px] font-bold text-fp-secondary-99 lg:w-auto lg:px-[50px]"
        >
          Contact Us
        </Link>
        <Link
          to="#"
          className="flex w-full justify-center rounded-xl bg-fp-primary-80 py-[15px] font-bold text-fp-primary-20 lg:w-auto  lg:px-[50px]"
        >
          Our Projects
        </Link>
      </div>
    </>
  );
};

export default HeroButton;
