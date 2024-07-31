import React, { useState } from 'react';


const NavigationBar = () => {
  // useState hook to manage the dropdown state for each section
  const [dropdown, setDropdown] = useState({
    home: false,
    products: false,
    about: false,
    contact: false,
  });

  // Function to handle mouse enter event and show the dropdown
  const handleMouseEnter = (section) => {
    setDropdown((prev) => ({ ...prev, [section]: true }));
  };

  // Function to handle mouse leave event and hide the dropdown
  const handleMouseLeave = (section) => {
    setDropdown((prev) => ({ ...prev, [section]: false }));
  };

  return (
    <div className="navbar">
      <div
        className="nav-item"
        onMouseEnter={() => handleMouseEnter('home')}
        onMouseLeave={() => handleMouseLeave('home')}
      >
        Home
        {dropdown.home && (
          <div className="dropdown">
            <a href="#">Submenu 1</a>
            <a href="#">Submenu 2</a>
            <a href="#">Submenu 3</a>
          </div>
        )}
      </div>
      <div
        className="nav-item"
        onMouseEnter={() => handleMouseEnter('products')}
        onMouseLeave={() => handleMouseLeave('products')}
      >
        Products
        {dropdown.products && (
          <div className="dropdown">
            <a href="#">EveryDay Wearing Sarees</a>
            <a href="#">Festiv Sarees</a>
            <a href="#">Submenu 3</a>
          </div>
        )}
      </div>
      <div
        className="nav-item"
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={() => handleMouseLeave('about')}
      >
        About
        {dropdown.about && (
          <div className="dropdown">
            <a href="#">Submenu 1</a>
            <a href="#">Submenu 2</a>
            <a href="#">Submenu 3</a>
          </div>
        )}
      </div>
      <div
        className="nav-item"
        onMouseEnter={() => handleMouseEnter('contact')}
        onMouseLeave={() => handleMouseLeave('contact')}
      >
        Contact
        {dropdown.contact && (
          <div className="dropdown">
            <a href="#">Submenu 1</a>
            <a href="#">Submenu 2</a>
            <a href="#">Submenu 3</a>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavigationBar;

