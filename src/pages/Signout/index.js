import React from "react";

const signout = (props) => {
  localStorage.removeItem("auth");
  return (window.location = "/signin");
};

export default signout;
