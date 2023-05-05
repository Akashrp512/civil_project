// src/components/Slab.js

import React, { useState } from "react";

const Slab = ({ AST }) => {
  const [FCK, setFCK] = useState(20);
  const [FY, setFY] = useState(415);
  const [b, setB] = useState(0);
  const [d, setD] = useState(0);
  const XU_MAX_RATIO = 0.48;

  const calculateMu = () => {
    const Xu = XU_MAX_RATIO * d;
    const Mu = 0.36 * Xu * (1 - 0.42 * (Xu / d)) * b * Math.pow(d, 2) * FCK;
    return Mu;
  };

  const Mu = calculateMu();

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-blue-600">
        Slab Calculator
      </h1>
      <p>AST: {AST}</p>
      <div className="flex flex-col">
        <label htmlFor="breadth" className="font-medium text-gray-600">
          FCK:
        </label>
        <input
          type="number"
          placeholder="FCK"
          value={FCK}
          onChange={(e) => setFCK(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="breadth" className="font-medium text-gray-600">
          FY:
        </label>
        <input
          type="number"
          placeholder="FY"
          value={FY}
          onChange={(e) => setFY(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="breadth" className="font-medium text-gray-600">
          Breadth (b):
        </label>
        <input
          type="number"
          placeholder="b"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="breadth" className="font-medium text-gray-600">
          Depth (d):
        </label>
        <input
          type="number"
          placeholder="d"
          value={d}
          onChange={(e) => setD(e.target.value)}
        />
      </div>
      <div className="mt-6 space-y-2">
        <p className="font-medium text-gray-700">
          Mu: <span className="font-normal">{Mu}</span>
        </p>
      </div>
    </div>
  );
};

export default Slab;
