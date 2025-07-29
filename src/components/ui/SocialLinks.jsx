import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { SocialLinksBox } from "@/styles/Links.styles";

const SocialLinks = () => {
  return (
    <SocialLinksBox>
      <FaInstagram />
      <AiOutlineFacebook />
      <FiTwitter />
    </SocialLinksBox>
  );
};

export default SocialLinks;
