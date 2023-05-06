// src/App.js

import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// import "./App.css";
import Column from "./components/Column";
import Footing from "./components/Floating";

import Slab from "./components/Slab";
import Beam from "./components/Beam";

function App() {
  const [ASC, setASC] = useState(0);
  const [AC, setAC] = useState(0);
  const [P, setP] = useState(0);
  const [AST, setAST] = useState(0);
  const [BeamAST, setBeamAST] = useState(0);

  return (
    <div className="App bg-slate-300 h-screen w-screen">
      <div className="bg-blue-600">
        <h1 className="text-center p-2 font-black text-white text-2xl">
          Civil Calculator
        </h1>
      </div>
      <Tabs>
        <TabList className="bg-blue-600 text-white">
          <Tab>Column</Tab>
          <Tab>Footing</Tab>
          <Tab>Beam</Tab>
          <Tab>Slab</Tab>
        </TabList>
        <TabPanel>
          <Column
            setASC={setASC}
            ASC={ASC}
            setAC={setAC}
            AC={AC}
            setP={setP}
            P={P}
          />
        </TabPanel>
        <TabPanel>
          <Footing P={P} setAST={setAST} ASC={ASC} />
        </TabPanel>
        <TabPanel>
          <Beam setBeamAST={setBeamAST} BeamAST={BeamAST} />
        </TabPanel>
        <TabPanel>
          <Slab AST={BeamAST} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
