import React from "react";

const HeroIllustration = () => {
  return (
    <>
      <img
        className="absolute top-0 -z-[10] -mt-[60px] ml-[70px] h-auto w-[400px] lg:right-0 lg:-mt-[100px] lg:-mr-[170px]"
        src={process.env.PUBLIC_URL + "/images/hero-img.png"}
        alt="header-illustration"
      ></img>
    </>
  );
};

export default HeroIllustration;
