// Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-6">
      <h2 className="text-center mb-6 text-xl md:text-2xl font-semibold">
        PLANNING, ANALYSIS, DESIGN AND STRUCTURAL DETAILING OF A MULTI STOREY
        BUILDING USING SOFTWARE TOOLS
      </h2>
      <div className="md:flex md:justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Team :</h3>
          <div className="space-y-2">
            1.
            <p>
              ABHISHEK KUMAR: 1VE19CS006
              <br /> Department of Computer Science and Engineering
            </p>
            2.
            <p>
              AYESHA MUSKAN: 1VE19CS026 <br /> Department of Computer Science
              and Engineering
            </p>
            3.
            <p>
              MADHU K V: 1VE19CV010 <br /> Department of Civil Engineering
            </p>
            4.
            <p>
              PRAKRUTI MR:1VE19CV022 <br /> Department of Civil Engineering
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-lg font-bold mb-2">Guides:</h3>
          <div className="space-y-2">
            1. <p>Ms. Divraraj </p>
            <p>Assistant Professor</p>
            <p>Department of Computer Science and Engineering</p>
            <p>Sri Venkateshwara College of Engineering, Bengaluru-562 157</p>
            <br />
            2. <p>Mr. Naveen Kumar B M</p>
            <p>Assistant Professor</p>
            <p>Department of Civil Engineering</p>
            <p>Sri Venkateshwara College of Engineering, Bengaluru-562 157</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
