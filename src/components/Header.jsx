import React from "react";
import Logo from "./Logo";
import NavIcon from "./NavIcon";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <>
      <div className="flex gap-[10px] p-[40px] md:px-[80px] lg:justify-center lg:gap-[80px] lg:px-[140px] lg:py-[60px] lg:text-xl">
        <Logo />
        <NavMenu />
        <NavIcon />
      </div>
    </>
  );
};

export default Header;
