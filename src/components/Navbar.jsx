import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-4">
      <nav className="container mx-auto">
        <h1 className="text-center p-2 font-black text-white text-2xl md:text-4xl">
          <Link to="/">Civil Calculator</Link>
        </h1>
      </nav>
    </div>
  );
}

export default Navbar;
