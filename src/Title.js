// Cara cepat => ketik rfce
import React from "react";

function Title(props) {
  return (
    <h1>
      {props.title}
      <br />
      {props.name}
    </h1>
  );
}

export default Title;
