import React from "react";

const HeroIllustration = () => {
  return (
    <>
      <div className="absolute top-0 right-0 z-10 h-[70px] w-[70px]">
        <img
          className="mt-[60px] -ml-[50%] scale-[5.0] md:-ml-[60%] lg:ml-[20%]"
          src={process.env.PUBLIC_URL + "/images/hero-img.png"}
          alt="header-illustration"
        ></img>
      </div>
    </>
  );
};

export default HeroIllustration;
