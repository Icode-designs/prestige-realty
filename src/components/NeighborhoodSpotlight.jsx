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
import { useFetchNeighborhoods } from "@/hooks/useFetch";
import CardBox from "@/components/ui/CardBox";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NeighborhoodSpotlight = ({ neighborhood = "" }) => {
  // Fetch neighborhoods data
  const { neighborhoodsData, error, loading } = useFetchNeighborhoods();

  // Filter featured neighborhoods
  let displayNeighborhoods =
    !loading && !error
      ? neighborhoodsData.filter((n) => n.featured === true)
      : [];

  if (neighborhood && !loading && !error) {
    displayNeighborhoods = neighborhoodsData.filter(
      (n) => n.name !== neighborhood
    );
  }
  return (
    <SectionWrapper>
      <FlexBox $variant="spaced">
        <Heading2>
          Neighborhood <span>Spotlight</span>{" "}
        </Heading2>
        <Link to="/neighborhoods">
          <DetailsLinkBox>
            <p>view all</p> <FaArrowRightLong className="icon" />
          </DetailsLinkBox>
        </Link>
      </FlexBox>

      {/* Placeholder for loading state */}
      {loading && (
        <FlexBox $variant="centered">
          <LoaderBox />
        </FlexBox>
      )}

      {/* Error handling for neighborhoods */}
      {error && (
        <ErrorBox>
          Error loading neighborhood data, check your internet connection. If
          the problem pesists please contact us
        </ErrorBox>
      )}
      {!loading && !error && (
        <GridBox $variant="horizontal">
          {/* Map through featured neighborhoods */}
          {displayNeighborhoods.map((neighborhood) => {
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
