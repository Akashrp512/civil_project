import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto mt-8 h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full text-center items-center">
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
    </div>
  );
}

export default Home;
