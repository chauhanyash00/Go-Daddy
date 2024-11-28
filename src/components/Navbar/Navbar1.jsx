import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file if needed for additional styles

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="tw-w-full tw-bg-gray-800 tw-text-white tw-py-4">
      <div className="tw-flex tw-justify-between tw-items-center tw-px-6">
        <h1 className="tw-text-2xl tw-font-bold">MyLogo</h1>
        <div className="tw-flex tw-items-center">
          <a href="#home" className="tw-text-white tw-mx-4 tw-text-lg">Home</a>
          <a href="#about" className="tw-text-white tw-mx-4 tw-text-lg">About</a>
          <div className="tw-relative">
            <button 
              className="tw-bg-gray-800 tw-text-white tw-border-0 tw-px-4 tw-py-2 tw-text-lg tw-cursor-pointer"
              onClick={toggleDropdown}
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="tw-absolute tw-top-full tw-left-0 tw-w-full tw-bg-gray-700 tw-border tw-border-gray-600">
                <a href="#service1" className="tw-block tw-px-4 tw-py-2 tw-text-white hover:tw-bg-gray-600">Service 1</a>
                <a href="#service2" className="tw-block tw-px-4 tw-py-2 tw-text-white hover:tw-bg-gray-600">Service 2</a>
                <a href="#service3" className="tw-block tw-px-4 tw-py-2 tw-text-white hover:tw-bg-gray-600">Service 3</a>
              </div>
            )}
          </div>
          <a href="#contact" className="tw-text-white tw-mx-4 tw-text-lg">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
