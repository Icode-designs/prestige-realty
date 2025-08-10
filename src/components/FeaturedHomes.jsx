import React from "react";
import {
  DetailsLinkBox,
  ErrorBox,
  FlexBox,
  GridBox,
  Heading2,
  LoaderBox,
  SectionWrapper,
} from "@/styles/Ui.styles";
import { useFetchListings } from "@/hooks/useFetch";
import CardBox from "@/components/ui/CardBox";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeaturedHomes = ({ listing = "", header = "" }) => {
  // Fetch listings
  const {
    listingsData,
    error: listingsError,
    loading: listingsLoading,
  } = useFetchListings();

  // Filter featured listings and neighborhoods
  let displayListings =
    !listingsLoading && !listingsError
      ? listingsData.filter((listing) => listing.featured === true)
      : [];

  if (listing && !listingsLoading & !listingsError) {
    displayListings = listingsData.filter(
      (listingData) => listingData.name !== listing
    );
  }

  return (
    <SectionWrapper>
      <FlexBox $variant="spaced">
        <Heading2>
          <span>{!header ? "Featured" : header}</span> Listings{" "}
        </Heading2>
        <Link to="/listings">
          <DetailsLinkBox>
            <p>view all</p> <FaArrowRightLong className="icon" />
          </DetailsLinkBox>
        </Link>
      </FlexBox>

      {/* Placeholder for loading state */}
      {listingsLoading && (
        <FlexBox $variant="centered">
          <LoaderBox />
        </FlexBox>
      )}

      {/* Error handling for listings */}
      {listingsError && (
        <ErrorBox>
          Error loading listings data, check your internet connection. If the
          problem pesists please contact us
        </ErrorBox>
      )}

      {!listingsLoading && !listingsError && (
        <GridBox $variant="horizontal">
          {/* Map through featured listings */}
          {displayListings.map((listing) => {
            const { id, name, description, price, listingsImages } = listing;
            return (
              <CardBox
                key={id}
                heading={name}
                price={price}
                paragraph={description}
                images={listingsImages.url}
              />
            );
          })}
        </GridBox>
      )}
    </SectionWrapper>
  );
};

export default FeaturedHomes;
