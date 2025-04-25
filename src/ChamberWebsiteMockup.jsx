import React, { useState } from 'react';

export default function ChamberWebsiteMockup() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-white text-black font-sans">
      {/* Sticky Navbar */}
      <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Left-Aligned Logo */}
          <a href="#home" className="flex items-center space-x-2">
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

          {/* Hamburger Icon */}
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

        {/* Mobile Dropdown Menu */}
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

      {/* Main Content */}
      <div className="pt-28 text-center px-6">
        <img src="/chamber-icon.png" alt="Chamber Icon" className="mx-auto mb-4 w-16 h-16" />
        <h1 className="text-4xl font-bold">Precision Living. Delivered.</h1>
        <p className="mt-4 max-w-xl mx-auto text-gray-600">
          Modular homes engineered to outlast and outshine. Wind-rated to <span className="text-red-500">200mph</span>. Built with elegance, strength, and simplicity.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-full text-sm">View Models</button>
          <button className="px-6 py-3 bg-black text-white rounded-full text-sm">Reserve Now</button>
        </div>
      </div>

      {/* Section Anchors */}
      <section id="about" className="py-20 text-center px-6">
        <h2 className="text-xl font-semibold mb-4">About Chamber</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          The Chamber delivers affordable, stylish modular living solutions built to withstand the world’s harshest environments.
        </p>
      </section>

      <section id="services" className="py-20 text-center px-6 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Our Services</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          Choose from our expertly engineered models: Pre, Del, Lux, Flex, and Clinic. Customization available. Reserve, track, and receive your home—ready to live in.
        </p>
        {/* Add service cards here if needed */}
      </section>

      <section id="contact" className="py-20 text-center px-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-sm text-gray-600 mb-4">Email us at <a href="mailto:dzignlabs@gmail.com" className="underline">dzignlabs@gmail.com</a></p>
        <button className="px-5 py-3 bg-black text-white rounded-full text-sm">Send Inquiry</button>
      </section>

      <footer className="bg-black text-white py-10 text-center">
        <p className="text-sm">© {new Date().getFullYear()} The Chamber by Dzign Labs. All rights reserved.</p>
        <p className="text-xs mt-2">Email: dzignlabs@gmail.com</p>
      </footer>
    </main>
  );
}
