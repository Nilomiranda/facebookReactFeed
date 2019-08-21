import React from 'react';

// styles
import '../styles/Header.css';

// images
import facebookLogo from '../assets/facebook.png';
import profile from '../assets/account_circle.png';

function Header() {
  return (
    <>
      <div className="main-wrapper">
        <img src={facebookLogo} />
        <div className="profile-buttons">
        <a>My profile</a>
        <img src={profile} />
        </div>
      </div>
    </>
  )
}

export default Header;