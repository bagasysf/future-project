import React from "react";

const HeroIllustration = () => {
  return (
    <>
      <div className="absolute right-0 -z-10 h-[100px] w-[100px]">
        <img
          className="absolute mt-[60px] -ml-[40px] scale-[4.0] md:-ml-[50px] lg:ml-[20px]"
          src={process.env.PUBLIC_URL + "/images/hero-img.png"}
          alt="header-illustration"
        ></img>
      </div>
    </>
  );
};

export default HeroIllustration;
