//bouton jaune importé de bootstrap

import React from "react";
import BootstrapButton from "react-bootstrap/Button";

const Button = ({ onClick, text }) => {
  return (
    <BootstrapButton variant="warning" onClick={onClick}>
      {text}
    </BootstrapButton>
  );
};

export default Button;
