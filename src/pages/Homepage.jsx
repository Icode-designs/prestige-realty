import React from "react";
import HeroBanner from "@/components/ui/HeroBanner";
import heroBg from "@/assets/Home/heroBg.jpg";
import {
  DetailsLinkBox,
  FlexBox,
  GridBox,
  Heading2,
  MainWrapper,
  SectionWrapper,
} from "@/styles/Ui.styles";
import { useFetchListings, useFetchNeighborhoods } from "@/hooks/useFetch";
import CardBox from "@/components/ui/CardBox";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Info from "@/components/Info";
import infoImg from "@/assets/Home/infoImg.jpg";
import Reviews from "@/components/Reviews";

const Homepage = () => {
  // Fetch listings
  const {
    listingsData,
    error: listingsError,
    loading: listingsLoading,
  } = useFetchListings();

  // Fetch neighborhoods data
  const {
    neighborhoodsData,
    error: neighborhoodError,
    loading: neighborhoodLoading,
  } = useFetchNeighborhoods();

  // Debugging logs to check data fetching
  // console.log("Homepage listingsData:", neighborhoodsData);

  // Filter featured listings and neighborhoods
  const featuredListings =
    !listingsLoading && !listingsError
      ? listingsData.filter((listing) => listing.featured === true)
      : [];

  // Filter featured neighborhoods
  const featuredNeighborhoods =
    !neighborhoodLoading && !neighborhoodError
      ? neighborhoodsData.filter((listing) => listing.featured === true)
      : [];

  const infoPara =
    "Our team of experienced professionals are dedicated to providing a seamless and personalized experience, ensuring your satisfaction every step of the way. Whether you're buying, selling, or renting, we are here to guide you through the process with expertise and care.";

  const infoHeading = `Luxury Real Estate <span>Experts</span>`;

  return (
    <>
      <MainWrapper>
        <HeroBanner
          header="Welcome to Prestige Estate"
          paragraph="Discover your dream home with us."
          btnText="Explore Listings"
          btnLink="/listings"
          bgImg={heroBg}
        />

        {/* Featured Listings Section */}
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
              Error loading listings data, check your internet connection. If
              the problem pesists please contact us
            </p>
          )}

          {!listingsLoading && !listingsError && (
            <GridBox>
              {/* Map through featured listings */}
              {featuredListings.map((listing) => {
                const { id, name, description, price, listingsImages } =
                  listing;
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

        {/* Featured Neighborhoods Section */}
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
              Error loading neighborhood data, check your internet connection.
              If the problem pesists please contact us
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

        {/* Info Section */}
        <Info
          image={infoImg}
          paragraph={infoPara}
          heading={<h2 dangerouslySetInnerHTML={{ __html: infoHeading }} />}
        />

        <Reviews />
      </MainWrapper>
    </>
  );
};

export default Homepage;
