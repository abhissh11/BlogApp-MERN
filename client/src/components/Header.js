import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="m-2 p-3 flex justify-between shadow-lg">
      <Link to="/">
        <div className="text-xl font-bold ">
          MERN <span className="text-blue-600">Blog</span>
        </div>
      </Link>
      <div className="flex gap-5 mx-9">
        <Link to="/sign-up">
          <button className="text-lg font-semibold text-white px-5 py-2 rounded-full bg-red-500">
            Sign Up
          </button>
        </Link>
        <Link to="/bookmarks">
          <button className="text-lg font-semibold text-white px-5 py-2 rounded-full bg-green-500">
            Bookmarks
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
