import React, { useState } from "react";
import "../index.css";
import columns from "../assets/column.jpg";

function Column() {
  const [ASC, setASC] = useState(0);
  const [AC, setAC] = useState(0);
  const [P, setP] = useState(0);
  const [breadth, setBreadth] = useState(0);
  const [depth, setDepth] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const FCK = 20;
  const FY = 415;
  const isValidInput = (b, d) => {
    ``;
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
    <>
      <div className="flex flex-col md:flex-row mt-2">
        <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-2/3 mx-auto md:mx-0 md:w-1/3">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
            COLUMNS
          </h1>
          <img src={columns} alt="Columns" className="rounded mb-4" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Columns such as the external columns of framed buildings, or columns
            carrying crane loads through corbels of a column, are subjected not
            only to direct loads (P), but also to moments (M) due to the
            eccentricity in application of the load. In the above columns the
            eccentricity is with respect to one axis only and these columns are
            said to be under uniaxial bending. On the other hand, a corner
            column of a building is subjected to eccentric load along both the X
            and Y axes. Such columns are said to be under biaxial bending.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-2/3 mx-auto border border-slate-500">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
            Column Calculator
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
                  FCK : <span className="text-base font-normal">{FCK}</span>
                </p>
                <p className="text-lg font-semibold">
                  FY : <span className="text-base font-normal">{FCK}</span>
                </p>
              </div>
            </div>
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
                  The results are displayed below. <br /> You can proceed for
                  the next Footing calculation...
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
      </div>
      <Footer />
    </>
  );
}

export default Column;
