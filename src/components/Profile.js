import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import profilePhoto from "../img/profile-photo.png";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-user-photo">
        <img src={profilePhoto} alt="user photo" />
      </div>

      <div className="profile-content">
        <div className="profile-header">
          <h2>insta_dog</h2>
          <div className="buttons-wrapper">
            <button>Follow</button>
            <button>
              <IoIosArrowDown />
            </button>
            <button>...</button>
          </div>
        </div>

        <div className="profile-activity">
          <p>
            <span id="bold">4,117</span> posts
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
            <span id="bold">DOGS 🐶 </span>
          </p>
          <p>
            <span id="inactive">Entertainment Website </span>
          </p>
          <p>🔥 Best dog content on Instagram</p>
          <p>🐶 Follow if you love dogs</p>
          <p>⭐ Get your monthly pet food delivery</p>
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
