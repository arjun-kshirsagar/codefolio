
import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src="profile-picture-url" alt="Profile" className="profile-pic" />
      <h2>Siddharth Singh</h2>
      <p>@siddharthsingh</p>
      <button>Edit Profile</button>
      <ul>
        <li>India</li>
        <li>DTU</li>
        <li>siddharthsingh123@gmail.com</li>
        <li>itssiddharthsingh</li>
        <li>N/A</li>
        <li>N/A</li>
        <li>N/A</li>
      </ul>
      <button>Get your codolio card</button>
    </div>
  );
};

export default ProfileCard;
