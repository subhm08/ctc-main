import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/service' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Book an Appointment', path: '/appointment' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-800 text-white flex flex-row flex-wrap items-center justify-between px-8 py-2 gap-2 sm:gap-8 text-sm sm:text-base font-mono ">
        <div className="flex items-center gap-2">
          <i className="bi bi-telephone-fill"></i>
          <a href="tel:8789383727">+91 87893 83727</a>
        </div>
        <div className="flex items-center gap-2">
          <i className="bi bi-envelope-fill"></i>
          <a href="mailto:care2curephysiotherapy71@gmail.com">care2curephysiotherapy71@gmail.com</a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-amber-700 text-white px-4 py-3 shadow-2xl flex items-center justify-between fixed top-0 w-full z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="logo.jpg" alt="C2C" className="rounded-full w-12 h-12 object-cover" />
          <h2 className="font-marcellus font-semibold text-xl ">Care 2 Cure Physiotheraphy </h2>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <i class="bi bi-x-lg text-3xl"></i> : <i class="bi bi-list text-3xl"></i>}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 font-semibold text-white">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `hover:underline ${isActive ? ' text-amber-200' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4 flex flex-col gap-3 font-semibold text-white fixed w-full z-10">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:underline ${isActive ? ' text-amber-500' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
