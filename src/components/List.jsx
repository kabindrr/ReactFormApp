import React from "react";

export const List = ({ list }) => {
  return (
    <div>
      {" "}
      <ul>
        {/* {list.map((item, i) => (
      <li key={i}>{item}</li>
    ))} */}
        {list.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
