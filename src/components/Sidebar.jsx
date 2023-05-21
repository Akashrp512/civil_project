// Sidebar Component
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-col w-full md:w-1/4 text-center sticky top-0 h-screen overflow-auto bg-white space-y-2 m-3 ">
      <Link
        to="/column"
        className="bg-indigo-600 text-white p-8 font-medium text-xl md:text-2xl rounded hover:bg-indigo-700 shadow-lg"
      >
        Column
      </Link>
      <Link
        to="/footing"
        className="bg-indigo-600 text-white p-8 font-medium text-xl md:text-2xl rounded hover:bg-indigo-700 shadow-lg"
      >
        Footing
      </Link>
      <Link
        to="/beam"
        className="bg-indigo-600 text-white p-8 font-medium text-xl md:text-2xl rounded hover:bg-indigo-700 shadow-lg"
      >
        Beam
      </Link>
      <Link
        to="/slab"
        className="bg-indigo-600 text-white p-8 font-medium text-xl md:text-2xl rounded hover:bg-indigo-700 shadow-lg"
      >
        Slab
      </Link>
    </div>
  );
}

export default Sidebar;
