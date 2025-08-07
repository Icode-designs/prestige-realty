import Findus from "@/components/Findus";
import { useFetchListings } from "@/hooks/useFetch";
import {
  DisplayImage,
  FeaturesBox,
  FlexBox,
  GridBox,
  Heading1,
  Heading2,
  Heading3,
  LoaderBox,
  MainWrapper,
  MoneyDisplay,
  SectionWrapper,
} from "@/styles/Ui.styles";
import { formatToUSD } from "@/utils/formatPrice";
import { slugify } from "@/utils/slugify";
import React from "react";
import { useParams } from "react-router-dom";

const ListingDetailspage = () => {
  const { name } = useParams();
  const { listingsData, loading } = useFetchListings();

  if (loading) {
    return <LoaderBox />;
  }

  const listing = Array.isArray(listingsData)
    ? listingsData.find((listing) => slugify(listing.name) === name)
    : null;

  if (!listing) {
    return <p>Listing not found.</p>;
  }

  console.log(listing);
  return (
    <MainWrapper>
      <SectionWrapper>
        <Heading2>
          {listing.name}, {listing.lga} {listing.town}
        </Heading2>
        <DisplayImage
          src={listing.listingsImages?.url || ""}
          alt={listing.name}
        />
        <p>{listing.description}</p>
        <FlexBox>
          <Heading3>Price: </Heading3>
          <MoneyDisplay>{formatToUSD(listing.price)}</MoneyDisplay>
        </FlexBox>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Property Perks</Heading2>
        <GridBox>
          <FeaturesBox>
            <Heading3>Year built</Heading3>
            <p>{listing.yearBuilt}</p>
          </FeaturesBox>
          <FeaturesBox>
            <Heading3>Property size</Heading3>
            <p>{listing.propertySize} square feet</p>
          </FeaturesBox>
          <FeaturesBox>
            <Heading3>Category</Heading3>
            <p>{listing.category}</p>
          </FeaturesBox>
          <FeaturesBox>
            <Heading3>Bedrooms</Heading3>
            <p>{listing.bedrooms}</p>
          </FeaturesBox>
          <FeaturesBox>
            <Heading3>Baths</Heading3>
            <p>{listing.baths}</p>
          </FeaturesBox>
          <FeaturesBox>
            <Heading3>Parks</Heading3>
            <p>{listing.parking} cars</p>
          </FeaturesBox>
        </GridBox>
      </SectionWrapper>
      <SectionWrapper>
        <Heading2>Property features</Heading2>
        <ul>
          {listing.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </SectionWrapper>
      <Findus />
    </MainWrapper>
  );
};

export default ListingDetailspage;
