import React from "react";
import HeroButton from "./HeroButton";
import HeroHeader from "./HeroHeader";
import HeroSubHeader from "./HeroSubHeader";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-[20px] overflow-hidden px-[40px] py-[80px] md:flex-row md:items-center md:py-[100px] md:px-[80px] lg:flex-col lg:px-[140px] lg:py-[160px]">
        <HeroHeader />
        <div className="flex flex-col gap-[20px] md:text-center lg:gap-[40px]">
          <HeroSubHeader />
          <HeroButton />
        </div>
      </div>
    </>
  );
};

export default Hero;
