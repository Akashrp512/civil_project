import React, { useState } from "react";
import "../index.css";

function Column({
  setASC,
  ASC,
  setAC,
  AC,
  setP,
  P,
  breadth,
  depth,
  setBreadth,
  setDepth,
}) {
  const [isCalculated, setIsCalculated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const FCK = 20;
  const FY = 415;
  const isValidInput = (b, d) => {
    if (b <= 0 || d <= 0) {
      setErrorMessage("Both breadth and depth must be greater than 0.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const calculateValues = () => {
    const b = parseFloat(breadth);
    const d = parseFloat(depth);

    if (!isValidInput(b, d)) {
      setIsCalculated(false);
      return;
    }

    const AG = b * d;
    const ASC = 0.008 * AG;
    const AC = AG - ASC;
    const P = 0.4 * FCK * AC + 0.67 * FY * ASC;

    setASC(ASC);
    setAC(AC);
    setP(P);
    setIsCalculated(true);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-2/3 mx-auto">
      <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
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
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="border-2 p-2 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
          />
        </div>
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded w-full transition duration-200 hover:bg-indigo-600 text-lg"
          onClick={calculateValues}
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
            <p className="font-medium">Column Calculation successful!</p>
            <p className="text-sm">
              The results are displayed below. <br /> You can proceed for the
              next Footing calculation...
            </p>
          </div>
        )}
        <div className="mt-6 space-y-2">
          <p className="font-medium text-gray-700 text-lg">
            ASC: <span className="font-normal">{ASC}</span>
          </p>
          <p className="font-medium text-gray-700 text-lg">
            AC: <span className="font-normal">{AC}</span>
          </p>
          <p className="font-medium text-gray-700 text-lg">
            P: <span className="font-normal">{P}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Column;
