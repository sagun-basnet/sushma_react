import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[5rem] flex justify-around items-center bg-amber-400 px-4">
      <h1 className="text-4xl">LOGO</h1>
      <ul className="flex gap-4 font-bold">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/service">
          <li>Service</li>
        </Link>
      </ul>
      <div className="flex gap-4">
        <Link to="/login">
          <button className="cursor-pointer p-2 px-4 rounded-md bg-blue-500 hover:bg-blue-700">
            Login
          </button>
        </Link>
        <Link to="signup">
          <button className="cursor-pointer p-2 px-4 rounded-md bg-amber-600 hover:bg-amber-700">
            Signup
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
