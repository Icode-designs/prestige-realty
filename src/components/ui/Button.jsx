import { ButtonBox } from "@/styles/Ui.styles";
import React from "react";

const Button = ({ children, ...props }) => {
  return <ButtonBox {...props}>{children}</ButtonBox>;
};

export default Button;
