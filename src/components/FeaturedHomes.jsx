import React from "react";
import {
  DetailsLinkBox,
  FlexBox,
  GridBox,
  Heading2,
  SectionWrapper,
} from "@/styles/Ui.styles";
import { useFetchListings } from "@/hooks/useFetch";
import CardBox from "@/components/ui/CardBox";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeaturedHomes = () => {
  // Fetch listings
  const {
    listingsData,
    error: listingsError,
    loading: listingsLoading,
  } = useFetchListings();

  // Filter featured listings and neighborhoods
  const featuredListings =
    !listingsLoading && !listingsError
      ? listingsData.filter((listing) => listing.featured === true)
      : [];

  return (
    <SectionWrapper>
      <FlexBox $variant="spaced">
        <Heading2>
          <span>Featured</span> Listings{" "}
        </Heading2>
        <Link>
          <DetailsLinkBox>
            <p>view all</p> <FaArrowRightLong className="icon" />
          </DetailsLinkBox>
        </Link>
      </FlexBox>

      {/* Placeholder for loading state */}
      {listingsLoading && <p>Loading items...</p>}

      {/* Error handling for listings */}
      {listingsError && (
        <p>
          Error loading listings data, check your internet connection. If the
          problem pesists please contact us
        </p>
      )}

      {!listingsLoading && !listingsError && (
        <GridBox $variant="horizontal">
          {/* Map through featured listings */}
          {featuredListings.map((listing) => {
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
