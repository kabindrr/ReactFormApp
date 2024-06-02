import React from "react";

export const Display = ({ inputProp }) => {
  return (
    <div className="display">
      <h1>{inputProp}</h1>
      <hr />
    </div>
  );
};
