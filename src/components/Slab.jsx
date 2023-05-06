// src/components/Slab.js

import React, { useState } from "react";

const Slab = ({ AST, b, d }) => {
  const [FCK, setFCK] = useState(20);
  const [FY, setFY] = useState(415);
  const [Mu, setMu] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const XU_MAX_RATIO = 0.48;

  const isValidInput = (FCK, FY, b, d) => {
    if (FCK <= 0 || FY <= 0 || b <= 0 || d <= 0) {
      setErrorMessage("All input values must be greater than 0.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const calculateMu = () => {
    if (!isValidInput(FCK, FY, b, d)) {
      setIsCalculated(false);
      setMu(0);
      return;
    }
    const Xu = XU_MAX_RATIO * d;
    const MuCalc = 0.36 * Xu * (1 - 0.42 * (Xu / d)) * b * Math.pow(d, 2) * FCK;
    setMu(MuCalc);
    setIsCalculated(true);
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-2/3 mx-auto">
      <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
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
          className="border-2 p-2 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
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
          className="border-2 p-2 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
          onChange={(e) => setFY(e.target.value)}
        />
      </div>

      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded w-full transition duration-200 hover:bg-indigo-600 text-lg"
        onClick={calculateMu}
      >
        Calculate
      </button>
      {errorMessage && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4 rounded-md"
          role="alert"
        >
          <p className="font-medium">Error!</p>
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      {isCalculated && (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-4 rounded-md"
          role="alert"
        >
          <p className="font-medium">
            Congrats! You have Successfully Calculated!!
          </p>
          <p className="text-sm">The results are displayed below.</p>
        </div>
      )}
      <div className="mt-6 space-y-2">
        <p className="font-medium text-gray-700">
          Mu: <span className="font-normal">{Mu}</span>
        </p>
      </div>
    </div>
  );
};

export default Slab;
