import HeroBanner from "@/components/ui/HeroBanner";
import {
  FlexBox,
  GridBox,
  Heading2,
  Heading3,
  MainWrapper,
  SectionWrapper,
  TeamCard,
  ValueCardBox,
} from "@/styles/Ui.styles";
import React from "react";
import aboutBg from "@/assets/about/aboutImg.jpeg";
import aboutInfo from "@/assets/about/aboutInfo.jpeg";
import { IoShieldHalfOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { MdBuild } from "react-icons/md";
import Info from "@/components/Info";
import agent1 from "@/assets/about/agent1.jpg";
import agent2 from "@/assets/about/agent2.jpg";
import agent3 from "@/assets/about/agent3.jpg";
import agent4 from "@/assets/about/agent4.jpg";
import FaqSection from "@/components/FAQ";
import Findus from "@/components/Findus";

const Aboutpage = () => {
  return (
    <MainWrapper>
      <HeroBanner
        bgImg={aboutBg}
        header="learn about prestige estate"
        paragraph="Discover Our story and Values"
      />

      <SectionWrapper>
        <Heading2 $textAlign="center">
          our <span>core values</span>
        </Heading2>
        <GridBox>
          <ValueCardBox>
            <FlexBox $variant="centered">
              <IoShieldHalfOutline className="values__icon" />
            </FlexBox>
            <p>integrity</p>
          </ValueCardBox>
          <ValueCardBox>
            <FlexBox $variant="centered">
              <RiCustomerService2Fill className="values__icon" />
            </FlexBox>
            <p>Cuestomer Centered</p>
          </ValueCardBox>
          <ValueCardBox>
            <FlexBox $variant="centered">
              <AiFillLike className="values__icon" />
            </FlexBox>
            <p>Excellence</p>
          </ValueCardBox>
          <ValueCardBox>
            <FlexBox $variant="centered">
              <MdBuild className="values__icon" />
            </FlexBox>
            <p>Inovation</p>
          </ValueCardBox>
        </GridBox>
      </SectionWrapper>

      <Info
        image={aboutInfo}
        paragraph="Founded in 2005, Prestige Estate set out to redefine luxury real estate with passion, integrity, and excellence. From a small dedicated team, we’ve grown into a leading agency known for expertise and client-focused service. Our mission is to connect discerning clients with dream homes, providing personalized guidance and full support throughout their real estate journey."
        heading="Our story"
      />

      <SectionWrapper>
        <Heading2 $textAlign="center">
          Meet <span>the team</span>
        </Heading2>
        <GridBox>
          <TeamCard>
            <img src={agent1} alt="agent" />
            <p>Tayo adebayo</p>
            <p>Founder</p>
          </TeamCard>
          <TeamCard>
            <img src={agent2} alt="agent" />
            <p>Ebuka Chukwuemeka</p>
            <p>Agent</p>
          </TeamCard>
          <TeamCard>
            <img src={agent3} alt="agent" />
            <p>Sofia Johnson</p>
            <p>Agent</p>
          </TeamCard>
          <TeamCard>
            <img src={agent4} alt="agent" />
            <p>Rhoda Otunba</p>
            <p>Agent</p>
          </TeamCard>
        </GridBox>
      </SectionWrapper>
      <FaqSection />
      <Findus />
    </MainWrapper>
  );
};

export default Aboutpage;
