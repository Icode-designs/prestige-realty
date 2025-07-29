import { NewsLetterBox } from "@/styles/NewsLetter.styles";
import React from "react";
import Button from "./ui/Button";
import { Heading2 } from "@/styles/Ui.styles";

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
        </article>
        <form action="">
          <input type="text" placeholder="example@mail.com" />
          <div>
            <Button>Subscribe</Button>
          </div>
        </form>
      </div>
    </NewsLetterBox>
  );
};

export default NewsLetter;
