import React from "react";

const HeroIllustration = () => {
  return (
    <>
      <img
        className="absolute top-0 -z-[10] ml-[16px] h-auto w-[400px]"
        src={process.env.PUBLIC_URL + "/images/hero-img.png"}
        alt="header-illustration"
      ></img>
    </>
  );
};

export default HeroIllustration;
