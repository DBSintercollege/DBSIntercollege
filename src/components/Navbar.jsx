import React, { useState } from 'react';
import { Link } from 'react-router';

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
      <nav className="bg-emerald-800 text-stone-200 px-6 py-4 shadow-md fixed w-full z-50 ">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link className="text-2xl font-bold">Name</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium">
            <Link to="/" className="hover:text-green-300 cursor-pointer">Home</Link>
            <Link to={"/about"} className="hover:text-green-300 cursor-pointer">About DBS</Link>
            <Link to="/gallery" className="hover:text-green-300 cursor-pointer">Gallery</Link>
            <Link  to="/notice" className="hover:text-green-300 cursor-pointer">Notice</Link>
            <Link to={"/contact"} className="hover:text-green-300 cursor-pointer">Contact</Link>
            <Link to={"/faculty"} className="hover:text-green-300 cursor-pointer">Faculty</Link>
            <Link to={"/result"} className="hover:text-green-300 cursor-pointer">Results</Link>
            <Link to={"/complain"} className="hover:text-green-300 cursor-pointer">Complains</Link>
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
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
