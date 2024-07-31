// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/images/Sclogo.jpg`} alt="Saloni Collections" />
        <h1>Saloni Collections</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button className="btn search-button">
          <i className="fas fa-search"></i>
        </button>
        <button className="btn filter-button">
          <i className="fas fa-sliders-h"></i>
        </button>
        <button className="btn cart-button">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button className="btn profile-button">
          <img src={`${process.env.PUBLIC_URL}/images/Sclogo.jpg`} alt="Profile" className="profile-pic" />
        </button>
      </div>
    </header>
  );
};

export default Header;
