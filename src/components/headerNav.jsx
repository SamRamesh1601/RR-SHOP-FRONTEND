import React from "react";
import { HiMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { LuPackageSearch } from "react-icons/lu";
import { IoMdCart } from "react-icons/io";
import LogoAvator from "../assets/item.jpg";

export default function HeaderNav() {
  return (
    <div className="header-nav-container center-divide-container">
      <div className="header-nav-right-container">
        <HiMenu className="menu-icon" />
        <span className="logo center-container">
          <span className="logo-name text-bas">Gromuse</span>
        </span>
        <div className="header-input-container center-divide-container">
          <input
            type="text"
            placeholder="search for Grocerry, Stores, Vegatable, or Meat"
            className="header-inputer"
          />
          <span className="header-input-icon">
            <IoSearch />
          </span>
        </div>
      </div>
      <div className="header-nav-left-container">
        <span className="text-bas para">
          {" "}
          Order now amd get it within 15 mins{" "}
        </span>
        <span className="avator-circle center-container ">
          <IoMdCart className="logo-icon" />
        </span>
        <span className="avator-circle center-container ">
          <img className="logo-icon-image" src={LogoAvator} alt="Logo Avator" />
        </span>
      </div>
    </div>
  );
}
