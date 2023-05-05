// src/components/Beam.js

import React, { useState } from "react";

const Beam = ({ setBeamAST, BeamAST }) => {
  const [FCK, setFCK] = useState(20);
  const [FY, setFY] = useState(415);
  const [b, setB] = useState(0);
  const [d, setD] = useState(0);
  const dPrime = 25;
  const MU_CONST = 520 * Math.pow(10, 6);

  const calculate = () => {
    const AST_calc = MU_CONST / (0.87 * FY * (d - dPrime));
    setBeamAST(AST_calc);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-blue-600">
        Beam Calculator
      </h1>
      <div className="space-y-4">
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
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full transition duration-200 hover:bg-blue-600"
          onClick={calculate}
        >
          Calculate
        </button>
        <div className="mt-6 space-y-2">
          <p className="font-medium text-gray-700">
            Beam AST: <span className="font-normal">{BeamAST}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beam;
