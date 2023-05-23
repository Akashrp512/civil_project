import React from "react";
import { Link } from "react-router-dom";
import footings from "./assets/footings.jpg";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-0 mt-8 min-h-screen flex flex-col md:flex-row">
        <div className="bg-white shadow-md rounded-lg p-8 w-full mb-8 md:mb-0 overflow-auto">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-indigo-600">
            PLANNING, ANALYSIS, DESIGN AND STRUCTURAL DETAILING OF A MULTI
            STOREY BUILDING USING SOFTWARE TOOLS
          </h1>
          <img src={footings} alt="Columns" className="rounded mb-4 " />
          <p className="text-gray-600 text-lg leading-relaxed">
            A multi-storey is a building that has multiple floors above the
            ground. It can be a residential or commercial building. In this
            project the planning, analysis and design of multi-storey hotel
            building G+3. In general, the analysis of multi-storey is elaborate
            and rigorous because those are statically indeterminate structures.
            Shears and moments due to different loading conditions are
            determined by many methods such as portal method, moment
            distribution method and matrix method.
            <br />
            The present project deals with the analysis of a G+3 building. The
            Dead Load, Live Loads & Seismic Loads are applied and the design for
            Slabs, Beams, Columns, Footing and Staircase are going to be done.
            <br />
            Multistoried Hotel Structure is the solution for the growing
            population needs in the cities. As the horizontal growth increases,
            problems of the power supply, water supply, sewerage system and
            transportation need also increases. These factors support the
            vertical development of the buildings. Further with the advent of
            newer building materials, vertical developments have become more
            common in cities. A multistoried building is basically a frame
            formed structure. In a multistoried frame all members are
            continuous. Hence, economical construction is possible. The
            earthquake forces are distributed effectively as the whole structure
            behaves as one unit.
            <br />
            Clearly, buildings are composed of various structure elements such
            as slabs, beams, columns, and footings. Each of these structural
            members play certain role in a structure. This article presents
            various aspects of these structural members for instance their
            function, types of loads imposed on them, and load transfer
            mechanism from one member to another one.
            <br />
          </p>
          <br />
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              The main assumptions made in a multistoried design of the frames
              are:
            </p>
            <ol className="text-gray-600 text-lg leading-relaxed">
              <li>All joints are rigid.</li>
              <li>Length of the members is not altered by direct stress.</li>
              <li>
                The deformation of the member due to internal shearing stress is
                neglected.{" "}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
