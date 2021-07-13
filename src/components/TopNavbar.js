import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { IoMdPaperPlane } from "react-icons/io";
import { AiOutlineCompass } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

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
        <div className="navbar-middle-wrapper">
          <span className="search-icon">
            <AiOutlineSearch />
          </span>
          <input type="text" placeholder="Search " />
        </div>
      </div>
      <div className="navbar-right">
        <span>
          <RiHome5Line />
        </span>
        <span>
          <IoMdPaperPlane />
        </span>
        <span>
          <AiOutlineCompass />
        </span>
        <span>
          <IoMdHeartEmpty />
        </span>
        <span>
          <img src="#" />
        </span>
      </div>
    </div>
  );
}
export default TopNavbar;
