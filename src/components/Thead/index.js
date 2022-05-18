import React from "react";

function Thead({ text }) {
  return (
    <thead className="thead-dark">
      <tr>
        {text.map((text, i) => {
          return <th key={i}>{text}</th>;
        })}
      </tr>
    </thead>
  );
}

export default Thead;
