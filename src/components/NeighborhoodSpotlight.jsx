import React from "react";
import {
  DetailsLinkBox,
  FlexBox,
  GridBox,
  Heading2,
  SectionWrapper,
} from "@/styles/Ui.styles";
import { useFetchNeighborhoods } from "@/hooks/useFetch";
import CardBox from "@/components/ui/CardBox";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NeighborhoodSpotlight = () => {
  // Fetch neighborhoods data
  const {
    neighborhoodsData,
    error: neighborhoodError,
    loading: neighborhoodLoading,
  } = useFetchNeighborhoods();

  // Filter featured neighborhoods
  const featuredNeighborhoods =
    !neighborhoodLoading && !neighborhoodError
      ? neighborhoodsData.filter((listing) => listing.featured === true)
      : [];

  return (
    <SectionWrapper>
      <FlexBox $variant="spaced">
        <Heading2>
          Neighborhood <span>Spotlight</span>{" "}
        </Heading2>
        <Link>
          <DetailsLinkBox>
            <p>view all</p> <FaArrowRightLong className="icon" />
          </DetailsLinkBox>
        </Link>
      </FlexBox>

      {/* Placeholder for loading state */}
      {neighborhoodLoading && <p>Loading items...</p>}

      {/* Error handling for neighborhoods */}
      {neighborhoodError && (
        <p>
          Error loading neighborhood data, check your internet connection. If
          the problem pesists please contact us
        </p>
      )}
      {!neighborhoodLoading && !neighborhoodError && (
        <GridBox>
          {/* Map through featured neighborhoods */}
          {featuredNeighborhoods.map((neighborhood) => {
            const {
              id,
              name,
              description,
              neighborhoodImagesTable: neighborhoodImages,
            } = neighborhood;
            return (
              <CardBox
                key={id}
                heading={name}
                paragraph={description}
                images={neighborhoodImages.url}
              />
            );
          })}
        </GridBox>
      )}
    </SectionWrapper>
  );
};

export default NeighborhoodSpotlight;
