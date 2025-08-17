import React, { useState } from "react";

// icons
import { FaAngleRight } from "react-icons/fa6";

// data

// components

// styles
import {
  FaqContainer,
  FlexBox,
  Heading2,
  Heading3,
  SectionWrapper,
} from "@/styles/Ui.styles";
import { FaqData } from "@/utils/data";

function FaqSection() {
  const [toggleState, setToggleState] = useState(null);

  function handleClick(index) {
    // auto close faq
    setToggleState((prevToggleState) =>
      prevToggleState === index ? null : index
    );
  }

  return (
    <SectionWrapper>
      <FlexBox $variant="spaced">
        <Heading2>
          Frequently <span>asked questions</span>
        </Heading2>
      </FlexBox>
      <FaqContainer>
        {FaqData.map((data, index) => {
          return (
            <details
              onClick={(e) => {
                e.preventDefault();
                handleClick(index);
              }}
              key={index}
              open={toggleState === index}
            >
              <summary>
                <h5>{data.summary}</h5>

                <FaAngleRight className="accordion-btn" />
              </summary>
              <p>{data.desc}</p>
            </details>
          );
        })}
      </FaqContainer>
    </SectionWrapper>
  );
}

export default FaqSection;
