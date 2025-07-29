import { UsefullLinksBox } from "@/styles/Links.styles";
import React from "react";
import { Heading3 } from "@/styles/Ui.styles";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const UsefullLinks = () => {
  return (
    <UsefullLinksBox>
      <div>
        <Navigation footerNav />
      </div>
      <nav>
        <Heading3>Customer Care</Heading3>
        <ul>
          <li>
            <Link>Return and Exchange</Link>
          </li>
          <li>
            <Link>FAQ</Link>
          </li>
        </ul>
      </nav>
    </UsefullLinksBox>
  );
};

export default UsefullLinks;
