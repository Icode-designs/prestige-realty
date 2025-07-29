import { Heading1, HeroBannerBox } from "@/styles/Ui.styles";
import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const HeroBanner = ({ header, paragraph, btnText, btnLink, bgImg }) => {
  return (
    <HeroBannerBox $bgImg={bgImg}>
      <article>
        <div>
          <Heading1>{header}</Heading1>
          <p>{paragraph}</p>
        </div>
        <Button>
          <Link to={btnLink}>{btnText}</Link>{" "}
        </Button>
      </article>
    </HeroBannerBox>
  );
};

export default HeroBanner;
