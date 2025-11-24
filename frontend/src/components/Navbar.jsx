import React from 'react'
import { Link } from 'react-router-dom'
import healthImg from '../assets/images.jpg'

const Navbar = () => {
  return (
    <nav className="navbar bg-emerald-400 px-4 py-2 flex justify-between items-center">
      {/* Left: Logo */}
      <div>
        <Link to={"/"}><img src={healthImg} className="h-10 w-auto ml-20" alt="Logo" /></Link>
      </div>

      {/* Right: Links */}
      <div className="flex space-x-25 mr-70">
        <Link to="/" className="hover:text-gray-100">Home</Link>
        <Link to="/about" className="hover:text-gray-100">About</Link>
        <Link to="/services" className="hover:text-gray-100">Services</Link>
        <Link to="/patients" className="hover:text-gray-100">Patients</Link>
      </div>
    </nav>
  )
}

export default Navbar
