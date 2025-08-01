import styled, { css } from "styled-components";
import { pxToRem } from "../utils/pxToRem";

export const LogoBox = styled.div`
  width: ${pxToRem(125)};
  height: fit-content;
  transition: all ease 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: ${pxToRem(860)}) {
    width: ${pxToRem(150)};
    height: fit-content;
  }

  img {
    width: 100%;
    height: auto;

    ${({ $variant }) =>
      $variant === "white" &&
      css`
        filter: invert(1);
      `}
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  ${({ $variant }) =>
    $variant === "spaced" &&
    css`
      justify-content: space-between;
    `}
  ${({ $variant }) =>
    $variant === "centered" &&
    css`
      justify-content: center;
    `}
`;

export const GridBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${pxToRem(240)}, 1fr));
  grid-column-gap: ${pxToRem(24)};
  grid-row-gap: ${pxToRem(32)};
  > div {
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(${pxToRem(-2)}) translateX(${pxToRem(-2)});
      box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Heading1 = styled.h1`
  font-size: ${pxToRem(32)};
  font-weight: bold;
  line-height: 105%;

  @media (min-width: ${pxToRem(600)}) {
    font-size: ${pxToRem(48)};
  }
`;

export const Heading2 = styled.h2`
  font-size: ${pxToRem(20)};
  font-weight: bold;
  line-height: 115%;

  @media (min-width: ${pxToRem(600)}) {
    font-size: ${pxToRem(32)};
  }
`;
export const Heading3 = styled.h3`
  font-size: ${pxToRem(16)};
  font-weight: bold;
  line-height: 130%;

  @media (min-width: ${pxToRem(600)}) {
    font-size: ${pxToRem(20)};
  }
`;

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxToRem(64)};
  padding-top: ${pxToRem(62)};

  @media (min-width: ${pxToRem(768)}) {
    padding: ${pxToRem(32)} ${pxToRem(16)};
    padding-top: ${pxToRem(94)};
    grid-gap: ${pxToRem(96)};
  }
`;

export const SectionWrapper = styled.section`
  max-width: var(--max-w);
  margin: var(--centered);
  width: 100%;
  padding: 0 ${pxToRem(16)};
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${pxToRem(32)};
  background-color: var(--col-10);
  border-radius: ${pxToRem(12)};
  padding: ${pxToRem(32)} ${pxToRem(16)};
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

export const ButtonBox = styled.button`
  height: fit-content;
  border: none;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${pxToRem(13)};
  color: var(--col-10);
  background-color: var(--col-20);
  border-radius: ${pxToRem(8)};
  font-size: ${pxToRem(16)};
  font-weight: bold;
  transition: all ease 0.5s;

  &:hover {
    background-color: var(--col-50);
  }
`;

export const HeroBannerBox = styled.section`
  max-width: var(--max-w);
  margin: var(--centered);
  border-bottom-left-radius: ${pxToRem(12)};
  border-bottom-right-radius: ${pxToRem(12)};
  position: relative;
  background-image: url(${({ $bgImg }) => $bgImg});
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  padding: ${pxToRem(67)} ${pxToRem(16)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
  width: 100%;
  height: 80vh;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 20%;
    z-index: -1;
    background-color: var(--col-40);
    border-bottom-left-radius: ${pxToRem(12)};
    border-bottom-right-radius: ${pxToRem(12)};
  }

  article {
    color: var(--col-10);
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: ${pxToRem(16)};
    text-align: center;

    div {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: ${pxToRem(16)};

      p {
        font-weight: bold;
      }
    }
  }

  @media (min-width: ${pxToRem(768)}) {
    border-radius: ${pxToRem(12)};
    padding: ${pxToRem(80)} ${pxToRem(16)};

    &::after {
      border-radius: ${pxToRem(12)};
    }

    article {
      max-width: ${pxToRem(600)};
      div {
        grid-gap: ${pxToRem(0)};
      }
    }
  }
`;

export const DetailsLinkBox = styled.div`
  display: flex;
  gap: ${pxToRem(8)};
  align-items: center;
  color: var(--col-60);
  .icon {
    transition: transform 0.3s ease;
  }

  &:hover {
    .icon {
      transform: translateX(${pxToRem(4)});
    }
  }
`;

export const CardBoxStyles = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxToRem(16)};
  border-radius: ${pxToRem(12)};

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: ${pxToRem(12)};
    height: ${pxToRem(300)};
  }
`;

export const CardBoxArticle = styled.article`
  padding: ${pxToRem(8)};
  display: grid;
  grid-gap: ${pxToRem(8)};

  p {
    &.price {
      font-weight: 600;
      color: var(--col-60);
      font-size: ${pxToRem(12)};
    }
  }
  button {
    margin-top: ${pxToRem(16)};
    justify-self: start;

    @media (min-width: ${pxToRem(768)}) {
      justify-self: end;
    }
  }
`;

export const InputBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxToRem(8)};
  width: 100%;
  align-items: start;
  height: fit-content;
  position: relative;

  .error {
    position: absolute;
    top: 100%;
    left: 0;
    color: var(--col-30);
    font-style: italic;
    font-weight: lighter;
    font-size: ${pxToRem(10)};
    text-align: left;
  }
`;

export const FormCardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--col-10);
  border-radius: ${pxToRem(12)};
  padding: ${pxToRem(32)} ${pxToRem(16)};
  grid-row-gap: ${pxToRem(32)};
  align-items: center;
  justify-items: center;
  height: fit-content;
  width: 80vw;
  margin: auto;

  p {
    font-size: ${pxToRem(14)};
    color: var(--col-40);
    text-align: center;
    opacity: 0.8;
    a {
      color: var(--col-60);
      text-decoration: underline;
    }
  }

  form {
    max-width: ${pxToRem(500)};
    margin: var(--centered);
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${pxToRem(16)};

    button {
      width: 100%;
    }

    label {
      text-transform: capitalize;
      font-size: ${pxToRem(12)};
      font-weight: bold;
    }
  }
`;
