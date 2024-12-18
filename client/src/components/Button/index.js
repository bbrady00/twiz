import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/button.css";

const Button = ({ text, onClick, className, style }) => {
  return (
    <button className={`btn ${className}`} style={style} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  style: {},
};

export default Button;
