import React, { useState } from "react";
import "./Box.css";

function Box({ children }) {
  const [isOpen, setIsopen] = useState(true);
  return (
    <div className="box">
      <button onClick={() => setIsopen(!isOpen)} className="btn-toggle">
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;
