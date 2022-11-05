import React from "react";

const Logo = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center gap-[10px] md:justify-start lg:w-auto">
        <img
          src={process.env.PUBLIC_URL + "/images/logo-future.svg"}
          alt="logo-future"
        ></img>
        <p className="font-bold italic text-fp-primary-20">futureproject</p>
      </div>
    </>
  );
};

export default Logo;
