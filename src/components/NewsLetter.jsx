import { NewsLetterBox } from "@/styles/NewsLetter.styles";
import React from "react";
import Button from "./ui/Button";
import { Heading2 } from "@/styles/Ui.styles";
import InputForm from "./ui/InputForm";

const NewsLetter = () => {
  return (
    <NewsLetterBox>
      <div>
        <article>
          <Heading2>
            Stay in the <span>Loop</span>
          </Heading2>
          <p>
            Sign up for our newsletter to receive exclusive offers and be the
            first to know about new deals.
          </p>
          <InputForm placeHolder="example@mail.com" btnText="subscribe" />
        </article>
      </div>
    </NewsLetterBox>
  );
};

export default NewsLetter;
