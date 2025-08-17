import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const NewsLetterBox = styled.section`
  background-color: var(--col-30);
  padding: ${pxToRem(65)} ${pxToRem(16)};
  > div {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-row-gap: ${pxToRem(32)};
    > * {
      max-width: ${pxToRem(350)};
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      grid-gap: ${pxToRem(16)};
    }

    article {
      text-align: center;
      color: var(--col-10);
      p {
        opacity: 100%;
      }
    }
  }
  @media (min-width: ${pxToRem(768)}) {
    > div {
      > * {
        max-width: ${pxToRem(558)};
      }
      form {
        display: flex;
        padding: 0 ${pxToRem(40)};
        gap: 0;
        input {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          width: 100%;
        }
        div {
          border: none;
          padding: ${pxToRem(6)};
          background-color: var(--col-10);
          border-top-right-radius: ${pxToRem(8)};
          border-bottom-right-radius: ${pxToRem(8)};
        }
      }
    }
  }
`;
