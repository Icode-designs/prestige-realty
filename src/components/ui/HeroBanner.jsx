import { Heading1, HeroBannerBox } from "@/styles/Ui.styles";
import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import InputForm from "./InputForm";

const HeroBanner = ({ header, paragraph, bgImg, page }) => {
  return (
    <HeroBannerBox $bgImg={bgImg}>
      <article>
        <div>
          <Heading1>{header}</Heading1>
          <p>{paragraph}</p>
        </div>
        {page === "home" && (
          <InputForm
            placeHolder="search neighborhoods or homes"
            btnText="search"
          />
        )}
      </article>
    </HeroBannerBox>
  );
};

export default HeroBanner;
