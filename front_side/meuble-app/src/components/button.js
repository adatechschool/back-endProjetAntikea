import React from "react";
import BootstrapButton from "react-bootstrap/Button";

const Button = ({ onClick, text }) => {
  return <BootstrapButton onClick={onClick}>{text}</BootstrapButton>;
};

export default Button;
