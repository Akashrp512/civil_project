import React, { useState } from "react";
import "../index.css";

function Column({ setASC, ASC, setAC, AC, setP, P }) {
  const [breadth, setBreadth] = useState(0);
  const [depth, setDepth] = useState(0);

  const FCK = 20;
  const FY = 415;

  const calculateValues = () => {
    const b = parseFloat(breadth);
    const d = parseFloat(depth);

    const AG = b * d;
    const ASC = 0.008 * AG;
    const AC = AG - ASC;
    const P = 0.4 * FCK * AC + 0.67 * FY * ASC;

    setASC(ASC);
    setAC(AC);
    setP(P);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-blue-600">
        Column Calculator
      </h1>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="breadth" className="font-medium text-gray-600">
            Breadth (b):
          </label>
          <input
            type="number"
            id="breadth"
            value={breadth}
            onChange={(e) => setBreadth(e.target.value)}
            className="border-2 p-1 rounded focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="depth" className="font-medium text-gray-600">
            Depth (d):
          </label>
          <input
            type="number"
            id="depth"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="border-2 p-1 rounded focus:border-blue-500"
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full transition duration-200 hover:bg-blue-600"
          onClick={calculateValues}
        >
          Calculate
        </button>
        <div className="mt-6 space-y-2">
          <p className="font-medium text-gray-700">
            ASC: <span className="font-normal">{ASC}</span>
          </p>
          <p className="font-medium text-gray-700">
            AC: <span className="font-normal">{AC}</span>
          </p>
          <p className="font-medium text-gray-700">
            P: <span className="font-normal">{P}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Column;
