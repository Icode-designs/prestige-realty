import React from "react";
import { CopyRight, FooterBox, FooterContentBox } from "@/styles/Footer.styles";
import Logo from "./ui/Logo";
import SocialLinks from "./ui/SocialLinks";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import UsefullLinks from "./ui/UsefullLinks";
import { Heading3 } from "@/styles/Ui.styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterBox>
      <FooterContentBox>
        <article>
          <div>
            <Logo variant="white" />
            <p>
              Premium real estate for the modern homeowner. Style and comfort
              that transcend expectations.
            </p>
            <SocialLinks />
          </div>

          <div>
            <p>
              <Link>Privacy Policy</Link>
            </p>
            <p>
              <Link>Terms of Service</Link>
            </p>
            <p>
              <a href="mailto:example@gmail.com">
                <IoMdMail />
                example@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+2348133661252">
                <FaPhoneAlt />
                +2348133661252
              </a>
            </p>
          </div>
        </article>
        <div>
          <UsefullLinks />
          <nav>
            <Heading3>Get the App</Heading3>
            <p>Coming soon</p>
          </nav>
        </div>
      </FooterContentBox>
      <CopyRight>
        <p>© 2024 Prestige Real-Estate. All rights reserved.</p>
      </CopyRight>
    </FooterBox>
  );
};

export default Footer;
