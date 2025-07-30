import { CardBoxArticle, CardBoxStyles, Heading3 } from "@/styles/Ui.styles";
import { formatToUSD } from "@/utils/formatPrice";
import { trimCharacters } from "@/utils/trimChar";
import React from "react";
import Button from "./Button";

const CardBox = ({ images, heading, paragraph, price }) => {
  // console.log("CardBox images:", images);
  return (
    <CardBoxStyles>
      <img src={images} />
      <CardBoxArticle>
        <Heading3>{heading}</Heading3>
        {price && <p className="price">{formatToUSD(price / 1500)}</p>}
        <p>{trimCharacters(paragraph)}</p>
        <Button>View Details</Button>
      </CardBoxArticle>
    </CardBoxStyles>
  );
};

export default CardBox;
