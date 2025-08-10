import Findus from "@/components/Findus";
import NeighborhoodSpotlight from "@/components/NeighborhoodSpotlight";
import { useFetchNeighborhoods } from "@/hooks/useFetch";
import {
  DisplayImage,
  FeaturesBox,
  FlexBox,
  GridBox,
  Heading2,
  Heading3,
  LoaderBox,
  MainWrapper,
  MoneyDisplay,
  SectionWrapper,
} from "@/styles/Ui.styles";
import { formatToUSD } from "@/utils/formatPrice";
import { slugify } from "@/utils/slugify";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const NeighborhoodDetailspage = () => {
  const { name } = useParams();
  const { neighborhoodsData, loading, error } = useFetchNeighborhoods();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);
  console.log(neighborhoodsData);

  const neighborhood =
    !loading &&
    !error &&
    neighborhoodsData.find(
      (n) => slugify(n.name.toLowerCase()) === name.toLowerCase()
    );

  if (loading) {
    return <LoaderBox />;
  }

  console.log(neighborhood);
  return (
    <MainWrapper>
      <SectionWrapper>
        <Heading2>
          {neighborhood.name} {neighborhood.town} {neighborhood.lga}
        </Heading2>
        <DisplayImage
          src={neighborhood.neighborhoodImagesTable.url}
          alt={neighborhood.name}
        />
        <p>{neighborhood.description}</p>
        <FlexBox>
          <Heading3>Average Price: </Heading3>
          <MoneyDisplay>{formatToUSD(neighborhood.averagePrice)}</MoneyDisplay>
        </FlexBox>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Neighborhood Information</Heading2>
        <GridBox>
          <FeaturesBox>
            <Heading3>crime rate</Heading3>
            <p>{neighborhood.crimeRate}</p>
          </FeaturesBox>
          <FeaturesBox>
            <Heading3>Living cost</Heading3>
            <p>{neighborhood.LivingCost}</p>
          </FeaturesBox>
          <FeaturesBox>
            <Heading3>Average Electricity Duration</Heading3>
            <p>{neighborhood.electricity}</p>
          </FeaturesBox>
          <FeaturesBox>
            <Heading3>Accessibility</Heading3>
            <p>{neighborhood.accessibility}</p>
          </FeaturesBox>
        </GridBox>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Notable places</Heading2>
        <ul>
          {neighborhood.notablePlaces.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </SectionWrapper>

      <NeighborhoodSpotlight neighborhood={neighborhood.name} />
      <Findus />
    </MainWrapper>
  );
};

export default NeighborhoodDetailspage;
