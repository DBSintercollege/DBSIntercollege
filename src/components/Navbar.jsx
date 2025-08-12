import React, { useState } from 'react';
import { Link } from 'react-router';
import logo from '../assets/1000091118.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-emerald-800 text-stone-200 px-10 py-2 shadow-md fixed w-full z-50 ">
        <div className="flex items-center justify-between max-w-full mx-auto"> 
          <Link className="text-2xl font-bold">
          <img src={logo}  alt="School logo"  className='w-20'/>
          
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 font-medium">
            <Link to="/" className="hover:text-green-300 cursor-pointer font-bold">Home</Link>
            <Link to={"/about"} className="hover:text-green-300 cursor-pointer font-bold">About DBS</Link>
            <Link to="/gallery" className="hover:text-green-300 cursor-pointer font-bold">Gallery</Link>
            <Link  to="/notice" className="hover:text-green-300 cursor-pointer font-bold">Notice</Link>
            <Link to={"/contact"} className="hover:text-green-300 cursor-pointer font-bold">Contact</Link>
            <Link to={"/faculty"} className="hover:text-green-300 cursor-pointer font-bold">Faculty</Link>
            <Link to={"/result"} className="hover:text-green-300 cursor-pointer font-bold">Results</Link>
            <Link to={"/complain"} className="hover:text-green-300 cursor-pointer font-bold">Complains</Link>
            <Link to={"/achivement"} className="hover:text-green-300 cursor-pointer font-bold">Achivements</Link>
            <Link to={"/alumni"} className="hover:text-green-300 cursor-pointer font-bold">Alumni</Link>
            <Link to={"/video"} className="hover:text-green-300 cursor-pointer font-bold">Video</Link>
          </div>

          {/* Hamburger Button (Mobile) */} 
          <button
            className="md:hidden text-3xl"
            onClick={toggleSidebar}
          >
            <i className="fa-solid fa-bars cursor-pointer"></i>
          </button>
        </div>
      </nav>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-40 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar (Mobile only) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-emerald-700 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="text-2xl font-bold mb-6">MySite</div>
          <ul className="flex flex-col gap-4 font-medium">
            <Link  to="/" className="hover:text-green-300 cursor-pointer" onClick={closeSidebar}>Home</Link>
            <Link to={"/about"} className="hover:text-green-300 cursor-pointer" onClick={closeSidebar}>About DBS</Link>
            <Link to={"/faculty"} className="hover:text-green-300 cursor-pointer" onClick={closeSidebar}>Faculty</Link>
            <Link  to={"/contact"} className="hover:text-green-300 cursor-pointer" onClick={closeSidebar}>Contact</Link>
            <Link to="/gallery" className="hover:text-green-300 cursor-pointer" onClick={closeSidebar}>Gallery</Link>
            <Link to={"/notice"} className="hover:text-green-300 cursor-pointer" onClick={closeSidebar}>Notice</Link>
            <Link to={"/result"} className="hover:text-green-300 cursor-pointer" onClick={closeSidebar}>Result</Link>
            <Link to={"/complain"} className="hover:text-green-300 cursor-pointer" onClick={closeSidebar}>Complains</Link>
            <Link to={"/achivement"} className="hover:text-green-300 cursor-pointer " onClick={closeSidebar}>Achivements</Link>
            <Link to={"/alumni"} className="hover:text-green-300 cursor-pointer " onClick={closeSidebar}>Alumni</Link>
            <Link to={"/video"} className="hover:text-green-300 cursor-pointer " onClick={closeSidebar}>Video</Link>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
