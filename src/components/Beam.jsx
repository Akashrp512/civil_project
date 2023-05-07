// src/components/Beam.js

import React, { useState } from "react";

const Beam = () => {
  const [FCK, setFCK] = useState(20);
  const [FY, setFY] = useState(415);
  const [b, setB] = useState(0);
  const [d, setD] = useState(0);
  const [BeamAST, setBeamAST] = useState(0);

  const dPrime = 25;
  const MU_CONST = 520 * Math.pow(10, 6);
  const [isCalculated, setIsCalculated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isValidInput = (FCK, FY, b, d) => {
    if (FCK <= 0 || FY <= 0 || b <= 0 || d <= 0) {
      setErrorMessage("All input values must be greater than 0.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const calculate = () => {
    if (!isValidInput(FCK, FY, b, d)) {
      setIsCalculated(false);
      return;
    }

    const AST_calc = MU_CONST / (0.87 * FY * (d - dPrime));
    setBeamAST(AST_calc);
    setIsCalculated(true);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-2/3 mx-auto">
      <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
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
            className="border-2 p-2 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
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
            id="breadth"
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
            id="depth"
            value={d}
            onChange={(e) => setD(e.target.value)}
            className="border-2 p-2 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
          />
        </div>

        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded w-full transition duration-200 hover:bg-indigo-600 text-lg"
          onClick={calculate}
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
            <p className="font-medium">Beam Calculation successful!</p>
            <p className="text-sm">
              The results are displayed below. <br /> You can proceed for next
              Slab calculation...
            </p>
          </div>
        )}

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
