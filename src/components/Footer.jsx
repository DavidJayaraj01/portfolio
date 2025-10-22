import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-white py-8 px-4 border-t backdrop-blur-lg"
      style={{
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(139,92,246,0.05), rgba(139,92,246,0.05) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,255,255,0.05), rgba(0,255,255,0.05) 1px, transparent 1px, transparent 40px)',
        backgroundSize: '40px 40px',
        borderColor: 'rgba(139, 92, 246, 0.2)',
      }} 
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        {/* Left side: your name */}
        <div className="font-bold text-lg">
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            David Jayaraj A
          </span>
        </div>

        {/* Center: Quick links */}
        <div className="flex gap-6 text-gray-400">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Right side: copyright */}
        <div className="text-gray-400">
          © 2025 David Jayaraj. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
