import { InfoArticleBox, InfoBox, InfoImgBox } from "@/styles/Info.styles";
import { Heading2 } from "@/styles/Ui.styles";
import React from "react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const Info = ({ image, heading, paragraph }) => {
  return (
    <InfoBox>
      <InfoImgBox $image={image}>
        <div></div>
      </InfoImgBox>

      <InfoArticleBox>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <Link to="/contact">
          <Button>Contact us</Button>
        </Link>
      </InfoArticleBox>
    </InfoBox>
  );
};

export default Info;
