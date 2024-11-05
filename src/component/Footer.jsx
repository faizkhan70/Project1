import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>› Home</li>
            <li>› All Products</li>
            <li>› Contact</li>
            <li>› FAQ</li>
            <li>› About Us</li>
            <li>› Gift Card</li>
          </ul>
        </div>
        
        {/* My Account */}
        <div>
          <h3 className="text-lg font-semibold mb-4">My Account</h3>
          <ul className="space-y-2">
            <li>› My Profile</li>
            <li>› My Orders</li>
            <li>› My Wishlist</li>
          </ul>
        </div>
        
        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>› Sandals</li>
            <li>› Slippers</li>
            <li>› Wedges</li>
            <li>› Heels</li>
            <li>› Party Wear</li>
            <li>› Close Shoes</li>
            <li>› Box Heels</li>
            <li>› PU Soul</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>250, Samundar Mahal, Maulana Azad Road, Madanpura, Opp – Nagori Hospital, Nappada Junction, Mumbai - 400 008.</p>
          <p className="mt-4">+91 9870652011</p>
          <p>11:00 am to 6:00 pm Mon-Sat</p>
          <p>info@macrofootwear.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
