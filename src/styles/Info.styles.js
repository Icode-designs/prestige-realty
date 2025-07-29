import styled from "styled-components";
import { pxToRem } from "@/utils/pxToRem";

export const InfoBox = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxToRem(32)};
  padding: 0 ${pxToRem(16)};
  max-width: var(--max-w);
  margin: var(--centered);
  justify-items: center;

  @media (min-width: ${pxToRem(768)}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${pxToRem(32)};
    align-items: center;
  }
`;

export const InfoImgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: ${pxToRem(300)};
    height: ${pxToRem(300)};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-image: url(${({ $image }) => $image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    border-radius: 50%;
  }

  @media (min-width: ${pxToRem(768)}) {
    order: 2;

    > div {
      width: ${pxToRem(400)};
      height: ${pxToRem(400)};
      background-attachment: unset;
    }

    img {
      width: 100%;
    }
  }
`;

export const InfoArticleBox = styled.article`
  text-align: center;
  padding: ${pxToRem(16)};
  display: grid;
  align-items: start;
  justify-items: center;

  h2 {
    font-size: ${pxToRem(32)};
    font-weight: bold;
    margin-bottom: ${pxToRem(24)};
    line-height: 115%;
  }

  p {
    margin-bottom: ${pxToRem(32)};
  }

  @media (min-width: ${pxToRem(768)}) {
    display: block;
    text-align: left;
    order: 1;
    width: 90%;
    justify-items: unset;
  }

  @media (min-width: ${pxToRem(1024)}) {
    h2 {
      font-size: ${pxToRem(40)};
    }
  }
`;
