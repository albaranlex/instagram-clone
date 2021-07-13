import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { IoMdPaperPlane } from "react-icons/io";
import { AiOutlineCompass } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";

function TopNavbar() {
  return (
    <div className="navbar-main-wrapper">
      <div className="navbar-left">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>
      <div className="navbar-middle">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-right">
        <RiHome5Line />
        <IoMdPaperPlane />
        <AiOutlineCompass />
        <IoMdHeartEmpty />
      </div>
    </div>
  );
}
export default TopNavbar;
