import React, { useContext, useEffect } from "react";
import Logo from "./ui/Logo";
import { FlexBox } from "@/styles/Ui.styles";
import Navigation from "./ui/Navigation";
import { NavContext } from "@/store/nav.context";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useMediaQuery } from "@mui/material";
import { HeaderBox, ToggleNavbtn } from "@/styles/Header.styles";

const Header = () => {
  const { isNavOpen, closeNav, toggleNav } = useContext(NavContext);

  const isLargeScreen = useMediaQuery("(min-width: 912px)");
  useEffect(() => {
    if (isLargeScreen) {
      closeNav();
    }
  }, [isLargeScreen, closeNav]);
  return (
    <HeaderBox $navOpen={isNavOpen}>
      <div>
        <FlexBox $variant="spaced">
          <Logo />

          <Navigation closeNav={closeNav} isNavOpen={isNavOpen} />

          {!isLargeScreen && (
            <ToggleNavbtn onClick={toggleNav}>
              {isNavOpen ? <IoMdClose /> : <FaBarsStaggered />}
            </ToggleNavbtn>
          )}
        </FlexBox>
      </div>
    </HeaderBox>
  );
};

export default Header;
