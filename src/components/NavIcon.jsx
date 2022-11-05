import React from "react";

const NavIcon = () => {
  return (
    <>
      <img
        className="lg:hidden"
        src={process.env.PUBLIC_URL + "/icons/menu-icon.svg"}
        alt="menu-icon"
      ></img>
    </>
  );
};

export default NavIcon;
