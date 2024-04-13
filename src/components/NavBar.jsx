import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const Background = {
    backgroundColor: "rgb(244,239,233)",
  };

  return (
    <nav
      style={Background}
      className="flex items-center justify-between flex-wrap p-6"
    >
      <div className="flex items-center flex-shrink-0 text-brown mr-6">
        <span className="font-dm text-xl tracking-tight">Sunset Sips</span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-brown-200 hover:text-green mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-brown-200 hover:text-white mr-4"
          >
            About
          </a>
        </div>
      </div>

      <div>
        <Link to='/cart'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
            clipRule="evenodd"
          />
        </svg>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
