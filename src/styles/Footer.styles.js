import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const FooterBox = styled.footer`
  background-color: var(--col-60);
  padding: ${pxToRem(40)} ${pxToRem(16)};
  display: grid;
  grid-template-columns: 1fr;
`;
export const FooterContentBox = styled.div`
  background-color: var(--col-60);
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxToRem(24)};
  color: var(--col-10);
  justify-items: center;
  align-items: center;
  max-width: var(--max-w);
  margin: var(--centered);

  article {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${pxToRem(24)};
    justify-items: center;
    align-items: center;
    text-align: center;
    max-width: ${pxToRem(373)};
    > div:nth-of-type(1),
    > div:nth-of-type(2) {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: center;
    }

    div:nth-of-type(1) {
      grid-row-gap: ${pxToRem(16)};
    }
    p {
      a {
        width: 100%;
        display: flex;
        align-items: center;
        gap: ${pxToRem(8)};
      }
    }

    @media (min-width: ${pxToRem(768)}) and (max-width: ${pxToRem(912)}) {
      display: flex;
      align-items: start;
      justify-content: space-between;
      max-width: none;
      width: 100%;
      > * {
        max-width: 50%;
      }
      div:nth-of-type(1) {
        justify-items: left;
        text-align: left;
      }
      div:nth-of-type(2) {
        display: grid;
        grid-gap: ${pxToRem(16)};
        justify-items: right;
        text-align: right;
      }
    }
  }

  > div {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-row-gap: ${pxToRem(16)};
  }

  nav {
    text-align: center;
    h3 {
      color: var(--col-20);
    }
  }

  @media (min-width: ${pxToRem(768)}) and (max-width: ${pxToRem(912)}) {
    grid-gap: ${pxToRem(32)};
    > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }

  @media (min-width: ${pxToRem(913)}) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > * {
      max-width: 50%;
    }
    > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    article {
      text-align: left;
      > div:nth-of-type(1),
      div:nth-of-type(2) {
        justify-items: left;
        width: 100%;
        grid-gap: ${pxToRem(8)};
      }
    }
  }
`;

export const CopyRight = styled.div`
  border-top: ${pxToRem(1)} var(--col-10) solid;
  text-align: center;
  padding: ${pxToRem(8)};
  margin-top: ${pxToRem(24)};
  color: var(--col-10);
  opacity: 70%;
`;
