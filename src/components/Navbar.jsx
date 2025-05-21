import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      
      <div className="text-3xl font-bold text-orange-500 flex items-center space-x-1">
        <span className="text-orange-200">Z</span>
        <span className="text-cyan-500">aan</span>
        <span className="text-cyan-400 font-extralight -ml-2">var</span>
      </div>

      
      <button
        className="block md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      
      <ul
        className={`flex flex-col md:flex-row md:space-x-10 text-md font-semibold text-gray-800 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto md:items-center md:justify-center transition-all duration-300 ease-in-out ${
          isOpen ? 'top-16 border-t border-gray-200' : 'top-[-490px]'
        } md:top-auto md:flex`}
      >
        <li className="cursor-pointer hover:text-cyan-500 px-4 py-2 md:p-0 border-b border-gray-200 md:border-none">Home</li>
        <li className="cursor-pointer hover:text-cyan-500 px-4 py-2 md:p-0 border-b border-gray-200 md:border-none">Services</li>
        <li className="cursor-pointer hover:text-cyan-500 px-4 py-2 md:p-0 border-b border-gray-200 md:border-none">Book a Vet</li>
        <li className="cursor-pointer hover:text-cyan-500 px-4 py-2 md:p-0 border-b border-gray-200 md:border-none">Shopping</li>
        <li className="cursor-pointer hover:text-cyan-500 px-4 py-2 md:p-0">About us</li>
      </ul>

      
      <button
        className="hidden md:block border-2 border-cyan-400 text-cyan-500 font-bold px-5 py-1.5 rounded-full hover:bg-cyan-100"
        onClick={() => navigate('/adopt')}
      >
        LOG IN
      </button>

      
      {isOpen && (
        <button
          className="block md:hidden mt-2 w-full border-2 border-cyan-400 text-cyan-500 font-bold px-5 py-2 rounded-full hover:bg-cyan-100"
          onClick={() => {
            navigate('/adopt');
            setIsOpen(false);
          }}
        >
          LOG IN
        </button>
      )}
    </nav>
  );
};

export default Navbar;
