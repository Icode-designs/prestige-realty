import React from "react";
import { LogoBox } from "@/styles/Ui.styles";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Logo = ({ variant = "" }) => {
  return (
    <Link to="/">
      <LogoBox $variant={variant}>
        <img src={logo} alt="kicks n' blings logo" />
      </LogoBox>
    </Link>
  );
};

export default Logo;
