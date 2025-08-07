import {
  CardBoxArticle,
  CardBoxStyles,
  Heading3,
  LoaderBox,
  MoneyDisplay,
} from "@/styles/Ui.styles";
import { formatToUSD } from "@/utils/formatPrice";
import { trimCharacters } from "@/utils/trimChar";
import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useFetchListings, useFetchNeighborhoods } from "@/hooks/useFetch";
import { slugify } from "@/utils/slugify";

const CardBox = ({ images, heading, paragraph, price }) => {
  const { listingsData } = useFetchListings();
  const { neighborhoodsData } = useFetchNeighborhoods();

  const listingNames = Array.isArray(listingsData)
    ? listingsData.map((item) => item.name)
    : [];

  const neighborhoodNames = Array.isArray(neighborhoodsData)
    ? neighborhoodsData.map((item) => item.name)
    : [];

  const isListing = listingNames.includes(heading);
  const isNeighborhood = neighborhoodNames.includes(heading);

  return (
    <CardBoxStyles>
      <img src={images} />
      <CardBoxArticle>
        <Heading3>{heading}</Heading3>
        {price && (
          <MoneyDisplay className="price">
            {formatToUSD(price / 1500)}
          </MoneyDisplay>
        )}
        <p>{trimCharacters(paragraph)}</p>
        <Link
          to={
            (isListing && `listing_details/${slugify(heading)}`) ||
            (isNeighborhood && `neighborhood_details/${slugify(heading)}`)
          }
        >
          {" "}
          <Button>View Details</Button>
        </Link>
      </CardBoxArticle>
    </CardBoxStyles>
  );
};

export default CardBox;
