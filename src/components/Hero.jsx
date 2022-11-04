import React from "react";
import HeroIllustration from "./HeroIlustration";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden px-[40px] py-[80px]">
        <HeroText />
        <HeroIllustration />
      </div>
    </>
  );
};

export default Hero;
