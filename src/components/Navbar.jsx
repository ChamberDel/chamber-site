import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo (Left Aligned) */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/chamber-icon.png" alt="Chamber Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-black">CHAMBER</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-black">
          <a href="#home" className="hover:text-gray-600">Home</a>
          <a href="#about" className="hover:text-gray-600">About</a>
          <a href="#services" className="hover:text-gray-600">Services</a>
          <a href="#contact" className="hover:text-gray-600">Contact</a>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-black">
            <a href="#home" className="hover:text-gray-600">Home</a>
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#services" className="hover:text-gray-600">Services</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
