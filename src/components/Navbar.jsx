import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#D2B48C] font-bold" : "hover:text-[#D2B48C]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCoffee"
          className={({ isActive }) =>
            isActive ? "text-[#D2B48C] font-bold" : "hover:text-[#D2B48C]"
          }
        >
          Add Coffee
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "text-[#D2B48C] font-bold" : "hover:text-[#D2B48C]"
          }
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "text-[#D2B48C] font-bold" : "hover:text-[#D2B48C]"
          }
        >
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            isActive ? "text-[#D2B48C] font-bold" : "hover:text-[#D2B48C]"
          }
        >
          Sign In
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#331A15] text-white px-4 md:px-24 sticky top-0 z-50 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#331A15] rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-serif font-bold text-[#D2B48C]">
          Espresso Emporium
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-lg">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 h-10 rounded-full bg-[#D2B48C] flex items-center justify-center border-2 border-white shadow-sm">
          <span className="text-[#331A15] font-bold">☕</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
