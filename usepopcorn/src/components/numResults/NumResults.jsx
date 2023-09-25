import React from "react";
import "./NumResults.css";

function NumResults({ numResults }) {
  return (
    <div className="numresults">
      Found <strong>{numResults}</strong> results
    </div>
  );
}

export default NumResults;
