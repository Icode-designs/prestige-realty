import React from "react";
import HeroBanner from "@/components/ui/HeroBanner";
import heroBg from "@/assets/Home/heroBg.jpg";
import { MainWrapper } from "@/styles/Ui.styles";
import Info from "@/components/Info";
import infoImg from "@/assets/Home/infoImg.jpg";
import Reviews from "@/components/Reviews";
import FeaturedHomes from "@/components/FeaturedHomes";
import NeighborhoodSpotlight from "@/components/NeighborhoodSpotlight";

const Homepage = () => {
  // Debugging logs to check data fetching
  // console.log("Homepage listingsData:", neighborhoodsData);

  const infoPara =
    "Our team of experienced professionals are dedicated to providing a seamless and personalized experience, ensuring your satisfaction every step of the way. Whether you're buying, selling, or renting, we are here to guide you through the process with expertise and care.";

  const infoHeading = `Luxury Real Estate <span>Experts</span>`;

  return (
    <>
      <MainWrapper>
        <HeroBanner
          header="Welcome to Prestige Estate"
          paragraph="Discover your dream home with us."
          bgImg={heroBg}
          page="home"
        />

        {/* Featured Listings Section */}
        <FeaturedHomes />

        {/* Featured Neighborhoods Section */}
        <NeighborhoodSpotlight />

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
