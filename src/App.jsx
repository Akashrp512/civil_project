// src/App.js

import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./App.css";
import Column from "./components/Column";
import Footing from "./components/Footing";

import Slab from "./components/Slab";
import Beam from "./components/Beam";

function App() {
  const [ASC, setASC] = useState(0);
  const [AC, setAC] = useState(0);
  const [P, setP] = useState(0);
  const [AST, setAST] = useState(0);
  const [BeamAST, setBeamAST] = useState(0);
  const [breadth, setBreadth] = useState(0);
  const [depth, setDepth] = useState(0);

  return (
    <div className="App h-screen w-screen">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-4">
        <h1 className="text-center p-2 font-black text-white text-2xl md:text-4xl">
          Civil Calculator
        </h1>
      </div>
      <div className="container mx-auto mt-8">
        <Tabs>
          <TabList className="flex justify-center space-x-6 text-lg font-medium mb-6 mt-2">
            <Tab className="text-indigo-600 border-b-2 border-indigo-600 pb-2">
              Column
            </Tab>
            <Tab className="text-indigo-600 border-b-2 border-indigo-600 pb-2">
              Footing
            </Tab>
            <Tab className="text-indigo-600 border-b-2 border-indigo-600 pb-2">
              Beam
            </Tab>
            <Tab className="text-indigo-600 border-b-2 border-indigo-600 pb-2">
              Slab
            </Tab>
          </TabList>
          <div className="tab-container">
            <TabPanel>
              <Column
                setASC={setASC}
                ASC={ASC}
                setAC={setAC}
                AC={AC}
                setP={setP}
                P={P}
                breadth={breadth}
                depth={depth}
                setBreadth={setBreadth}
                setDepth={setDepth}
              />
            </TabPanel>
            <TabPanel>
              <Footing P={P} setAST={setAST} ASC={ASC} b={breadth} d={depth} />
            </TabPanel>
            <TabPanel>
              <Beam
                setBeamAST={setBeamAST}
                BeamAST={BeamAST}
                b={breadth}
                d={depth}
              />
            </TabPanel>
            <TabPanel>
              <Slab AST={BeamAST} b={breadth} d={depth} />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
