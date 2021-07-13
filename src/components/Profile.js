import React from "react";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-user-photo">
        <img src="#" />
      </div>

      <div className="profile-info">
        <div className="profile-header">
          <p>instadog</p>
          <button>Follow</button>
          <button>More</button>
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
          <a hfref>yazing.com/topdeals/expiring</a>
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
