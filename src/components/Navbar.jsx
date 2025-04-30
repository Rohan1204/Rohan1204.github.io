// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/RohanLogo.png';

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastY,    setLastY]    = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setVisible(true);
      setLastY(currentY);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <nav
      className={`
        fixed top-0 inset-x-0 z-50
        bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${visible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center h-16 px-2">
        {/* Logo */}
        <a href="#Home" className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto filter brightness-0 invert"
          />
        </a>
        {/* Links */}
        <div className="flex-1 flex justify-center space-x-12 font-serif text-xl text-white">
          <a href="#AboutMe"    className="hover:text-blue-300 transition-colors">About Me</a>
          <a href="#Experience" className="hover:text-blue-300 transition-colors">Experience</a>
          <a href="#Projects"   className="hover:text-blue-300 transition-colors">Projects</a>
          <a href="#Contact"    className="hover:text-blue-300 transition-colors">Contact</a>
        </div>
        {/* Mobile button */}
        <button className="ml-auto md:hidden text-2xl text-white hover:text-blue-300">
          &#9776;
        </button>
      </div>
    </nav>
  );
};
