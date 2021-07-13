import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-user-photo">
        <img src="#" alt="user photo" />
      </div>

      <div className="profile-content">
        <div className="profile-header">
          <h2>instadog</h2>
          <button>Follow</button>
          <button>
            <IoIosArrowDown />
          </button>
          <button>...</button>
        </div>

        <div className="profile-activity">
          <p>
            <span id="bold">4117</span> posts
          </p>
          <p>
            <span id="bold">1.5m</span> followers
          </p>
          <p>
            <span id="bold">25</span> following
          </p>
        </div>

        <div className="profile-info">
          <p>
            <span id="bold">DOGS</span>
          </p>
          <p>Best dog content on Instagram</p>
          <p>Follow if you love dogs</p>
          <p>Get your monthly pet food delivery</p>
          <a href="yazing.com/topdeals/expiringnpm">
            yazing.com/topdeals/expiringnpm
          </a>
        </div>

        <div className="profile-followers">
          <p>
            <span id="inactive">Followed by </span> pubity
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
