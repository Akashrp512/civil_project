// src/App.js

import React, { useState } from "react";

import "./App.css";
import Column from "./components/Column";
import Footing from "./components/Floating";
import Beams from "./components/Beams";
import Slabs from "./components/Slabs";

function App() {
  const [ASC, setASC] = useState(0);
  const [AC, setAC] = useState(0);
  const [P, setP] = useState(0);
  const [AST, setAST] = useState(0);

  return (
    <div className="App">
      <Column
        setASC={setASC}
        ASC={ASC}
        setAC={setAC}
        AC={AC}
        setP={setP}
        P={P}
      />
      <Footing P={P} setAST={setAST} ASC={ASC} />
      <Beams AST={AST} />
      <Slabs AST={AST} />
    </div>
  );
}

export default App;
