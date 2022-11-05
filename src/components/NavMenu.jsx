import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <ul className="hidden items-center gap-[40px] font-bold text-fp-primary-20 lg:flex">
        <li>
          <Link to="#">Menu</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Services</Link>
        </li>
        <li>
          <Link to="#">Contacts</Link>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;
