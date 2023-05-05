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
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl">Calculator</h1>
      <div className="flex items-center">
        <label className="mr-2">Breadth (b):</label>
        <input
          type="number"
          value={breadth}
          onChange={(e) => setBreadth(e.target.value)}
          className="border-2 p-1"
        />
      </div>
      <div className="flex items-center mt-2">
        <label className="mr-2">Depth (d):</label>
        <input
          type="number"
          value={depth}
          onChange={(e) => setDepth(e.target.value)}
          className="border-2 p-1"
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={calculateValues}
      >
        Calculate
      </button>
      <div className="mt-4">
        <p>ASC: {ASC}</p>

        <p>AC: {AC}</p>
        <p>P: {P}</p>
      </div>
    </div>
  );
}

export default Column;
