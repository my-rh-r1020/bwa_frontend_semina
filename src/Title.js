// Cara cepat => ketik rfce
import React from "react";

// Function normal with Props
function Title(props) {
  return (
    <h1>
      {props.title}
      <br />
      {props.name}
    </h1>
  );
}

// // Function as variable
// const Content = function () {
//   return "Content";
// };

// // Function arrow
// const Header = () => {
//   return "Menu";
// };

Title.defaultProps = {
  title: "Belajar React JS",
};

export default Title;
