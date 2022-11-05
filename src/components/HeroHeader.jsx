import React from "react";
import HeroIllustration from "./HeroIlustration";

const HeroHeader = () => {
  return (
    <>
      <div className="relative">
        <p className="text-[52px] font-extrabold leading-[63px] text-fp-primary-20 lg:text-[64px]">
          Bring The Future into your hand
        </p>
        <HeroIllustration />
      </div>
    </>
  );
};

export default HeroHeader;
