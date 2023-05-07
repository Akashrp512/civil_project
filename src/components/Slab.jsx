// src/components/Slab.js

import React, { useState } from "react";

const Slab = () => {
  const [FCK, setFCK] = useState(20);
  const [FY, setFY] = useState(415);
  const [b, setB] = useState(0);
  const [d, setD] = useState(0);
  const [AST, setAST] = useState(0); // Manage AST state within the component
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

  const calculateMuAndAst = () => {
    if (!isValidInput(FCK, FY, b, d)) {
      setIsCalculated(false);
      setAST(0);
      return;
    }
    const Xu = XU_MAX_RATIO * d;
    const MuCalc = 0.36 * Xu * (1 - 0.42 * (Xu / d)) * b * Math.pow(d, 2) * FCK;
    const AST_calc =
      (0.87 * FY * MuCalc * d * (1 - (FY * MuCalc) / (b * d * FCK))) / MuCalc;
    setAST(AST_calc);
    setIsCalculated(true);
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-2/3 mx-auto">
      <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
        Slab Calculator
      </h1>

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
      <div className="flex flex-col">
        <label htmlFor="breadth" className="font-medium text-gray-600">
          Breadth (b):
        </label>
        <input
          type="number"
          placeholder="b"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="border-2 p-2 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="depth" className="font-medium text-gray-600">
          Depth (d):
        </label>
        <input
          type="number"
          placeholder="d"
          value={d}
          onChange={(e) => setD(e.target.value)}
          className="border-2 p-2 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
        />
      </div>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded w-full transition duration-200 hover:bg-indigo-600 text-lg mt-4"
        onClick={calculateMuAndAst}
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
          AST: <span className="font-normal">{AST}</span>
        </p>
      </div>
    </div>
  );
};

export default Slab;
