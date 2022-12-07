import React, { useState, useEffect } from "react";

import data from "./data";
import Silder from "./Silder";
function App() {
  // get data to our App and store it in variable
  const [people, setPeople] = useState(data);

  return (
    <section className="section">
      {/* Section Title */}
      <div className="title">
        <h2>
          <span>*</span> Reviews <span>*</span>
        </h2>
      </div>

      {/* section-center  (slider) */}
      <div className="section-center">
        <Silder people={people} />
      </div>
    </section>
  );
}

export default App;
