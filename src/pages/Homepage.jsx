import React from "react";
import HeroBanner from "@/components/ui/HeroBanner";
import heroBg from "@/assets/Home/heroBg.jpg";
import { MainWrapper } from "@/styles/Ui.styles";
import Info from "@/components/Info";
import infoImg from "@/assets/Home/infoImg.jpg";
import Reviews from "@/components/Reviews";
import FeaturedHomes from "@/components/FeaturedHomes";
import NeighborhoodSpotlight from "@/components/NeighborhoodSpotlight";
import Findus from "@/components/Findus";

const Homepage = () => {
  // debuging log to check data fetching
  // console.log("Homepage listingsData:", neighborhoodsData);

  const infoPara =
    "Our team of experienced professionals are dedicated to providing a seamless and personalized experience, ensuring your satisfaction every step of the way. Whether you're buying, selling, or renting, we are here to guide you through the process with expertise and care.";

  const infoHeading = `Luxury Real Estate <span>Experts</span>`;
  const heroHeaderTxt = `<span>Welcome</span> to Prestige Estate`;

  return (
    <>
      <MainWrapper>
        <HeroBanner
          header={<p dangerouslySetInnerHTML={{ __html: heroHeaderTxt }} />}
          paragraph="Discover your dream home with us."
          bgImg={heroBg}
          page="home"
        />

        <FeaturedHomes />

        <NeighborhoodSpotlight />

        <Info
          image={infoImg}
          paragraph={infoPara}
          heading={<h2 dangerouslySetInnerHTML={{ __html: infoHeading }} />}
        />

        <Reviews />

        <Findus />
      </MainWrapper>
    </>
  );
};

export default Homepage;
