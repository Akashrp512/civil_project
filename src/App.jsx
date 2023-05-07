import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Column from "./components/Column";
import Footing from "./components/Footing";
import Slab from "./components/Slab";
import Beam from "./components/Beam";
import Home from "./Home";

function App() {
  return (
    <div className="App h-screen w-screen flex flex-col">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-4">
        <h1 className="text-center p-2 font-black text-white text-2xl md:text-4xl">
          <Link to="/">Civil Calculator</Link>
        </h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/column" element={<Column />} />
        <Route path="/footing" element={<Footing />} />
        <Route path="/beam" element={<Beam />} />
        <Route path="/slab" element={<Slab />} />
      </Routes>
    </div>
  );
}

export default App;
