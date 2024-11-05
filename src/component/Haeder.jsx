import React from 'react';
import { FaSearch, FaUserPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow-md space-y-4 sm:space-y-0">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="https://i.ibb.co/4ZBXpTV/Macro-1.png" // Replace with your logo URL
          alt="Logo"
          className="w-full h-12"
        />
      
      </div>

      {/* Search Section */}
      <div className="flex items-center w-full sm:w-1/2 bg-gray-100 rounded-full shadow-sm">
        <input
          type="text"
          placeholder="What Are You Looking For?"
          className="w-full py-2 px-4 bg-transparent text-gray-600 focus:outline-none rounded-full"
        />
        <button className="flex items-center justify-center bg-gray-800 text-white p-3 rounded-r-full">
          <FaSearch size={20} />
        </button>
      </div>

      {/* Login Section */}
      <div className="flex items-center space-x-2 text-gray-600">
        <FaUserPlus size={24} />
        <span className="text-lg">Login | Registration</span>
      </div>
    </header>
  );
};

export default Header;
