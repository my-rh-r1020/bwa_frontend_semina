import React from "react";
import propTypes from "prop-types";

function Button({ name, onClick, loading }) {
  return (
    <button onClick={onClick} disabled={loading ? true : false}>
      {loading ? "Loading..." : name}
    </button>
  );
}

Button.defaultProps = {
  name: "Button",
  loading: false,
};

Button.propTypes = {
  name: propTypes.string,
  onClick: propTypes.func,
  loading: propTypes.bool,
};

export default Button;
