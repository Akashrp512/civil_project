// src/components/Footing.js

import React, { useState } from "react";

const Footing = ({ P, setAST, AST }) => {
  const [FCK, setFCK] = useState(20);
  const [FY, setFY] = useState(415);
  const [b, setB] = useState(0);
  const [l, setL] = useState(0);
  const [d, setD] = useState(0);
  const [AST, setAST] = useState(0);

  const MU_CONST = 1241.79 * Math.pow(10, 6);

  const calculate = () => {
    const Mu = 0.87 * FY * AST * d * (2 - (AST * FY) / (b * d * FCK));
    const AST_calc =
      MU_CONST / (0.87 * FY * d * (2 - (AST * FY) / (b * d * FCK)));
    setAST(AST_calc);
  };

  return (
    <div>
      <h1>Footing Calculator</h1>
      <p>Pu: {P}</p>
      <input
        type="number"
        placeholder="b"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <input
        type="number"
        placeholder="l"
        value={l}
        onChange={(e) => setL(e.target.value)}
      />
      <input
        type="number"
        placeholder="d"
        value={d}
        onChange={(e) => setD(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>
      <p>AST: {AST}</p>
    </div>
  );
};

export default Footing;
