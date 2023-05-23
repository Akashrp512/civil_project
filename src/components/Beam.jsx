// src/components/Beam.js

import React, { useState } from "react";
import beam from "../assets/beam.png";
import Footer from "./Footer";

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
    <>
      <div className="flex flex-col md:flex-row mt-2">
        <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-2/3 mx-auto md:mx-0 md:w-1/3">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
            Beams
          </h1>
          <img src={beam} alt="Columns" className="rounded mb-4" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Beams are defined as the structural member subjected to transverse
            loads that cause bending moments and shear forces along their
            length. The plane of symmetry of the cross section of the beam and
            it passes through the shear center, so that the simple bending of
            beams occurs. The bending moment and shear forces produced by the
            transverse loads are called as simply supported or overhanging or
            cantilever or fixed or continuous depending upon the nature of
            supports and end conditions. The cross sections of most simple
            reinforced concrete beams are rectangular in shape.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-2/3 mx-auto">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
            Beam Calculator
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
                  Constant:
                </h2>
                <p className="text-lg font-semibold">
                  d' :{" "}
                  <span className="text-base font-normal">{dPrime} mm</span>
                </p>
                <p className="text-lg font-semibold">
                  Mu :{" "}
                  <span className="text-base font-normal">
                    {MU_CONST}(520*10power6){" "}
                  </span>
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
                  The results are displayed below. <br /> You can proceed for
                  next Slab calculation...
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
      </div>
      <Footer />
    </>
  );
};

export default Beam;
