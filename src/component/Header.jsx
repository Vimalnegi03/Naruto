import React from 'react';
import logo from '../assets/Images/logo.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-4 px-6 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <img src={logo} alt="Logo" className="h-20 w-20 rounded-full border-2 border-white shadow-lg" />
          <h1 className="text-white text-3xl sm:text-4xl font-bold ml-4 tracking-wider">Ninja World</h1>
        </div>
        <nav className="flex space-x-6 text-lg sm:text-xl lg:text-2xl font-semibold text-white">
          <Link to="/kara" className="hover:text-yellow-400 transition-colors duration-300">Kara</Link>
          <Link to="/home" className="hover:text-yellow-400 transition-colors duration-300">Home</Link>
          <Link to="/akatsuki" className="hover:text-yellow-400 transition-colors duration-300">Akatsuki</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
