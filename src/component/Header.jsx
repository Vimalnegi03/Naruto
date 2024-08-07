import React from 'react';
import logo from '../assets/Images/logo.jpg';
import { Link } from 'react-router-dom';
import "./Akatsuki.css";
import "./Home.css";

function Header() {
  return (
    <div className='bg-blue-950 h-1/6 w-full flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6'>
      <img src={logo} alt="Logo" className='h-16 w-16 mb-4 sm:mb-0' />
      <div className='flex flex-col sm:flex-row justify-around space-y-4 sm:space-y-0 sm:space-x-10 text-xl sm:text-2xl lg:text-4xl text-white font-mono tracking-wider'>
        <Link to="/kara" className='hover:text-blue-400'>Kara</Link>
        <Link to="/home" className='hover:text-blue-400'>Home</Link>
        <Link to="/akatsuki" className='hover:text-blue-400'>Akatsuki</Link>
      </div>
    </div>
  );
}

export default Header;
