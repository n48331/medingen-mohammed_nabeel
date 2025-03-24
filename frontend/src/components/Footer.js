import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold text-blue-600 mb-4">1mg</div>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Website</h3>
          <a href="#" className="block text-gray-400 hover:text-white mb-2">Home</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2">Medicines</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2">Lab Tests</a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <a href="#" className="block text-gray-400 hover:text-white mb-2">Instagram</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2">Facebook</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2">Twitter</a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">More</h3>
          <a href="#" className="block text-gray-400 hover:text-white mb-2">Events</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2">Terms & Conditions</a>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        © 2025 1mg. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;