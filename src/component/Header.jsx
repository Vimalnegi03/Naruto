import React from 'react'
import logo from '../assets/Images/logo.jpg'
import { Link } from 'react-router-dom'
import "./Akatsuki.css"
import "./Home.css"
function Header() {
  return (
    <div className='bg-blue-950 h-1/6 w-screen flex justify-between'>
     <img src={logo} alt="" height={70} width={70} />
     <div className='flex justify-around space-x-10 text-4xl mr-10 text-white font-mono tracking-wider '>
        <Link to="/kara" className='hover:text-blue-400'>Kara</Link>
        <Link to="/home" className='hover:text-blue-400'>Home</Link>
        <Link to="/akatsuki" className='hover:text-blue-400'>Akatsuki</Link>
     </div>
    </div>
  )
}

export default Header
