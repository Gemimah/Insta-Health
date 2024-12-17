import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TibaHealth Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">TibaHealth</h4>
            <p className="mb-4">
              Eagerly want to join our community and get daily updates about what we do in our daily lives? Just connect with us.
            </p>
            <div className="flex">
              <input
                type="email"
                className="flex-grow px-4 py-2 rounded-l-md text-gray-700 focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="bg-white text-blue-600 px-4 py-2 rounded-r-md font-medium hover:bg-gray-200">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect with Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <hr className="border-t border-gray-400 mb-4" />
          <p className="text-sm">&copy; 2024 TibaHealth</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
