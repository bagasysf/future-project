import React from "react";
import HeroIllustration from "./HeroIlustration";
import HeroHeader from "./HeroHeader";
import HeroSubHeader from "./HeroSubHeader";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col gap-[20px] overflow-hidden px-[40px] py-[80px]">
        <div>
          <HeroHeader />
          <HeroIllustration />
        </div>
        <HeroSubHeader />
      </div>
    </>
  );
};

export default Hero;
