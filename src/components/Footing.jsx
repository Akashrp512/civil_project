// src/components/Footing.js

import React, { useEffect, useState } from "react";

const Footing = ({ P, setAST, b, d }) => {
  const [FCK, setFCK] = useState(20);
  const [FY, setFY] = useState(415);
  const [l, setL] = useState(0);
  const [AST, setLocalAST] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const MU_CONST = 1241.79 * Math.pow(10, 6);

  useEffect(() => {
    setAST(AST);
  }, [AST, setAST]);

  const isValidInput = (FCK, FY, b, l, d) => {
    FCK = parseFloat(FCK);
    FY = parseFloat(FY);
    b = parseFloat(b);
    l = parseFloat(l);
    d = parseFloat(d);
    if (FCK <= 0 || FY <= 0 || b <= 0 || l <= 0 || d <= 0) {
      setErrorMessage("All input values must be greater than 0.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const calculate = () => {
    let initialASTGuess = 1; // Initial guess for AST
    let AST_calc = initialASTGuess;
    let Mu;
    if (!isValidInput(FCK, FY, parseFloat(b), parseFloat(l), parseFloat(d))) {
      setIsCalculated(false);
      return;
    }

    // Iterate to refine the AST value
    for (let i = 0; i < 1000; i++) {
      Mu = 0.87 * FY * AST_calc * d * (2 - (AST_calc * FY) / (b * d * FCK));
      AST_calc =
        MU_CONST / (0.87 * FY * d * (2 - (AST_calc * FY) / (b * d * FCK)));
    }

    setLocalAST(AST_calc);
    setIsCalculated(true);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-2/3 mx-auto">
      <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
        Footing Calculator
      </h1>

      <p className="font-medium text-gray-700 text-lg">
        Pu: <span className="font-normal">{P}</span>
      </p>
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
            Length (l):
          </label>
          <input
            type="number"
            placeholder="l"
            value={l}
            onChange={(e) => setL(e.target.value)}
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
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 mt-4 rounded-md"
            role="alert"
          >
            <p className="font-medium">Footing Calculation successful!</p>
            <p className="text-sm">
              The results are displayed below. <br /> You can proceed for the
              next Beam calculation...
            </p>
          </div>
        )}
        <div className="mt-6 space-y-2">
          <p className="font-medium text-gray-700 text-lg">
            AST: <span className="font-normal">{AST}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footing;
