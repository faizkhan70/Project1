import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi'; // Add imports for menu icons

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white relative">
      <div className="flex items-center">
        <div 
          className="cursor-pointer flex items-center" 
          onClick={toggleDropdown}
        >
          <span>Categories (See All)</span>
          <IoMdArrowDropdown className="ml-1" />
        </div>
        
        {isDropdownOpen && (
          <div className="absolute top-full left-0 bg-gray-700 w-48 shadow-lg z-10">
            <div className="p-2 hover:bg-gray-600 cursor-pointer">Category 1</div>
            <div className="p-2 hover:bg-gray-600 cursor-pointer">Category 2</div>
            <div className="p-2 hover:bg-gray-600 cursor-pointer">Category 3</div>
          </div>
        )}
      </div>
      
      <div className="hidden md:flex space-x-4 gap-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About Us</a>
        <a href="/shop" className="hover:underline">Shop</a>
        <a href="/products" className="hover:underline">Products</a>
        <a href="/contacts" className="hover:underline">Contacts</a>
      </div>

      <div className="flex items-center">
        <FaShoppingCart className="mr-2" />
        <span>$0.00 (0 Items)</span>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <HiX className="text-white" size={24} /> : <HiMenu className="text-white" size={24} />}
        </button>
      </div>

      {/* Mobile menu items */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 bg-gray-700 w-full shadow-lg z-10 flex flex-col">
          <a href="/" className="p-2 hover:bg-gray-600">Home</a>
          <a href="/about" className="p-2 hover:bg-gray-600">About Us</a>
          <a href="/shop" className="p-2 hover:bg-gray-600">Shop</a>
          <a href="/products" className="p-2 hover:bg-gray-600">Products</a>
          <a href="/contacts" className="p-2 hover:bg-gray-600">Contacts</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
