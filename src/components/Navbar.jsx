import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#D2B48C] font-bold" : "hover:text-[#D2B48C] transition-colors"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCoffee"
          className={({ isActive }) =>
            isActive ? "text-[#D2B48C] font-bold" : "hover:text-[#D2B48C] transition-colors"
          }
        >
          Add Coffee
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "text-[#D2B48C] font-bold" : "hover:text-[#D2B48C] transition-colors"
          }
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "text-[#D2B48C] font-bold" : "hover:text-[#D2B48C] transition-colors"
          }
        >
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            isActive ? "text-[#D2B48C] font-bold" : "hover:text-[#D2B48C] transition-colors"
          }
        >
          Sign In
        </NavLink>
      </li>
    </>
  );

  return (
   
    <div className="navbar bg-[#331A15] text-white px-2 md:px-24 sticky top-0 z-50 shadow-lg border-b border-[#D2B48C]/10">
      <div className="navbar-start">
      
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#D2B48C" 
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-[#331A15] rounded-box w-64 border border-[#D2B48C]/20 gap-2"
          >
            {links}
          </ul>
        </div>
        
      
        <Link to="/" className="text-lg md:text-2xl font-serif font-bold text-[#D2B48C] whitespace-nowrap">
          Espresso Emporium
        </Link>
      </div>

     
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-lg">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
       
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D2B48C] flex items-center justify-center border-2 border-white/20 shadow-sm transition-transform hover:rotate-12 cursor-pointer">
          <span className="text-sm md:text-base text-[#331A15] font-bold">☕</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;