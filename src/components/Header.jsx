import React from "react";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

const Header = () => {
  return (
    <>
      <div className="flex gap-[10px] p-[40px]">
        <Logo />
        <MenuIcon />
      </div>
    </>
  );
};

export default Header;
