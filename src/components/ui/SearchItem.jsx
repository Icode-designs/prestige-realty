import { SearchItemBox } from "@/styles/Ui.styles";
import { slugify } from "@/utils/slugify";
import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ result, listingNames, neighborhoodNames }) => {
  const isListing = listingNames.includes(result);
  const isNeighborhood = neighborhoodNames.includes(result);
  return (
    <SearchItemBox>
      <Link
        to={
          (isListing && `listing_details/${slugify(result)}`) ||
          (isNeighborhood && `neighborhood_details/${slugify(result)}`)
        }
      >
        {result}
      </Link>
      ;
    </SearchItemBox>
  );
};

export default SearchItem;
