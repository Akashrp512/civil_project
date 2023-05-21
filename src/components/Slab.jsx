// src/components/Slab.js
import React, { useState } from "react";
import slab from "../assets/slabs.jpg";

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
    <div className="flex flex-col md:flex-row mt-2">
      <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-2/3 mx-auto md:mx-0 md:w-1/3">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
          Slab
        </h1>
        <img src={slab} alt="Columns" className="rounded mb-4" />
        <p className="text-gray-600 text-lg leading-relaxed">
          Slab is an important structural element which is constructed to create
          flat and useful surfaces such as floors, roofs, and ceilings. It is a
          horizontal structural component, with top and bottom surfaces parallel
          or near so. To read more about slab thickness evaluation please click
          here . Commonly, slabs are supported by beams, columns (concrete or
          steel), walls, or the ground. The depth of a concrete slab floor is
          very small compared to its span.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-2/3 mx-auto">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
          Slab Calculator
        </h1>
        <div className="space-y-4">
          <div className="space-y-4 md:space-y-1 md:space-x-4 flex flex-col md:flex-row bg-slate-100 p-3 rounded-md border border-gray-700 border-separate">
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold mb-2 ">
                Full Form :
              </h2>
              <p className="text-lg font-semibold">
                Fck -{" "}
                <span className="text-base font-normal">
                  characteristic strength of concrete
                </span>
              </p>
              <p className="text-lg font-semibold">
                {" "}
                Ast -{" "}
                <span className="text-base font-normal">
                  area of tension steel
                </span>
              </p>
              <p className="text-lg font-semibold">
                Asc -{" "}
                <span className="text-base font-normal">
                  area of compression steel
                </span>
              </p>
              <p className="text-lg font-semibold">
                Fsc -{" "}
                <span className="text-base font-normal">
                  find the compression steel
                </span>
              </p>
              <p className="text-lg font-semibold">
                Fy -{" "}
                <span className="text-base font-normal">force to yield</span>
              </p>
              <p className="text-lg font-semibold">
                Ac ={" "}
                <span className="text-base font-normal">
                  area of concrete in column
                </span>
              </p>
              <p className="text-lg font-semibold">
                P-{" "}
                <span className="text-base font-normal">
                  Axial load carrying capacity
                </span>
              </p>
              <p className="text-lg font-semibold">
                Ag ={" "}
                <span className="text-base font-normal">
                  gross cross sectional area of column
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-xl lg:text-2xl font-semibold mb-2 ">
                Constant Value :
              </h2>
              <p className="text-lg font-semibold">
                FCK Value : <span className="text-base font-normal">{FCK}</span>
              </p>
              <p className="text-lg font-semibold">
                FY Value : <span className="text-base font-normal">{FCK}</span>
              </p>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default Slab;
