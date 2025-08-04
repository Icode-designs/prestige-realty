import { Heading1, HeroBannerBox } from "@/styles/Ui.styles";
import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import InputForm from "./InputForm";
import { IoSearchOutline } from "react-icons/io5";
import SearchInput from "./SearchInput";

const HeroBanner = ({ header, paragraph, bgImg, page = null }) => {
  return (
    <HeroBannerBox $bgImg={bgImg}>
      <article>
        <div>
          <Heading1>{header}</Heading1>
          <p>{paragraph}</p>
        </div>
        {page === "home" && (
          <SearchInput
            placeHolder="search for neighborhoods and homes"
            page={page}
          />
        )}
      </article>
    </HeroBannerBox>
  );
};

export default HeroBanner;
