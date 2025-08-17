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
  height: fit-content;
  gap: ${pxToRem(10)};

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
  height: fit-content;

  ${({ $variant }) =>
    $variant === "horizontal" &&
    css`
      display: flex;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    `}

  ${({ $variant }) =>
    $variant === "fixed" &&
    css`
      overflow-y: auto;
      height: 100%;
    `}
`;

export const Heading1 = styled.h1`
  font-size: ${pxToRem(32)};
  font-weight: bold;
  line-height: 105%;
  text-transform: capitalize;
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "inherit")};
  p {
    line-height: inherit;
  }

  @media (min-width: ${pxToRem(600)}) {
    font-size: ${pxToRem(48)};
  }
`;

export const Heading2 = styled.h2`
  font-size: ${pxToRem(20)};
  font-weight: bold;
  line-height: 115%;
  text-transform: capitalize;
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "inherit")};

  @media (min-width: ${pxToRem(600)}) {
    font-size: ${pxToRem(32)};
  }
`;
export const Heading3 = styled.h3`
  font-size: ${pxToRem(16)};
  font-weight: bold;
  line-height: 130%;
  text-transform: capitalize;
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "inherit")};

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
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : "var(--max-w)")};
  margin: var(--centered);
  width: 100%;
  height: fit-content;
  padding: 0 ${pxToRem(16)};
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${pxToRem(16)};
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
  text-transform: capitalize;

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
  height: ${pxToRem(600)};
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 25%;
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
        margin-top: ${pxToRem(16)};
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
  font-size: ${pxToRem(14)};
  .icon {
    transform: rotate(-45deg);
    transition: transform 0.3s ease;
  }

  &:hover {
    .icon {
      transform: none;
    }
  }
`;

export const CardBoxStyles = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxToRem(16)};
  border-radius: ${pxToRem(12)};
  transition: all ease 0.3s;
  min-width: ${pxToRem(240)};
  margin: ${pxToRem(10)} 0;
  transition: transform ease 0.3s;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: ${pxToRem(12)};
    height: ${pxToRem(300)};
  }

  &:hover {
    box-shadow: 0 ${pxToRem(6)} ${pxToRem(10)} rgba(0, 0, 0, 0.1);
    transform: translateY(${pxToRem(-10)});
  }
`;

export const CardBoxArticle = styled.article`
  padding: ${pxToRem(8)};
  display: grid;
  grid-gap: ${pxToRem(8)};

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

export const InputFormBox = styled.div`
  width: 100%;
  form {
    width: 100%;
    display: grid;
    justify-items: center;
    grid-row-gap: ${pxToRem(16)};
    input {
      padding: ${pxToRem(16)};
      border-radius: ${pxToRem(8)};
      border: none;
      outline: none;
    }
  }

  @media (min-width: ${pxToRem(768)}) {
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
`;

export const LoaderBox = styled.div`
  margin: var(--centered);
  width: ${pxToRem(40)};
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--col-20) 94%, #0000) top/8px
      8px no-repeat,
    conic-gradient(#0000 30%, var(--col-20));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: l13 1s infinite linear;

  @keyframes l13 {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export const SearchInputBox = styled.div`
  width: 100%;
  position: relative;
  height: fit-content;

  input {
    width: 100%;
    padding: ${pxToRem(16)};
    padding-right: ${pxToRem(48)};
    outline: none;
    border: none;
    background-color: var(--col-10);
    border-radius: ${pxToRem(12)};
    background-color: ${({ $bg }) => $bg || "var(--col-10)"};
  }
  .icon {
    display: flex;
    align-items: center;
    padding: ${pxToRem(12)};
    color: var(--col-40);
    opacity: 60%;
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
  }

  ul {
    background-color: var(--col-10);
    padding: ${pxToRem(8)};
    max-height: ${pxToRem(200)};
    overflow-y: scroll;
    margin-top: ${pxToRem(8)};
    border-radius: ${pxToRem(12)};
    &:last-child {
      border: none !important;
    }
  }
`;

export const ErrorBox = styled.p`
  text-align: center;
  font-size: ${pxToRem(12)};
`;

export const DisplayImage = styled.img`
  width: 100%;
  border-radius: ${pxToRem(12)};
  max-height: 70vh;
  object-fit: contain;
  object-position: center;
  background-color: var(--col-40);
`;

export const MoneyDisplay = styled.p`
  font-weight: 600;
  color: var(--col-60);
  font-size: ${pxToRem(16)};
  height: fit-content;
  opacity: 100%;
`;

export const FeaturesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${pxToRem(8)};
  width: fit-content;

  p {
    opacity: 70%;
  }
`;

export const SearchItemBox = styled.li`
  border-bottom: ${pxToRem(1)} solid rgba(0, 0, 0, 0.5);
  padding: ${pxToRem(8)};
  color: var(--col-40);
  font-size: ${pxToRem(8)};
  text-align: left;
  cursor: pointer;
  font-weight: bold;
`;

export const FilterDialog = styled.dialog`
  background-color: var(--col-30);
  max-width: ${pxToRem(600)};
  width: 100%;
  margin: auto;
  border: none;
  border-radius: ${pxToRem(12)};
  padding: ${pxToRem(32)};
  > div {
    align-items: center;
    margin-bottom: ${pxToRem(24)};
    button {
      margin: 0;
    }
  }

  label,
  h2 {
    color: var(--col-10);
    text-transform: capitalize;
  }
  input {
    border: none;
  }
  button {
    justify-self: right;
    margin-top: ${pxToRem(40)};
  }
`;

export const ValueCardBox = styled.div`
  margin-top: ${pxToRem(16)};
  .values__icon {
    color: var(--col-60);
    font-size: ${pxToRem(70)};

    @media (min-width: ${pxToRem(768)}) {
      font-size: ${pxToRem(100)};
    }
  }
  p {
    text-align: center;
    font-weight: bold;
    opacity: 70%;
  }
`;

export const TeamCard = styled.div`
  display: grid;
  justify-items: center;
  margin-top: ${pxToRem(16)};
  img {
    width: ${pxToRem(150)};
    height: ${pxToRem(150)};
    border-radius: 100%;
    margin-bottom: ${pxToRem(16)};
    object-fit: cover;
  }
  p {
    &:nth-of-type(2) {
      opacity: 70%;
    }

    text-align: center;
    font-weight: bold;
  }
`;

export const FaqContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  details {
    padding: 1rem 0;
    cursor: pointer;
    max-height: ${pxToRem(100)};
    transition: max-height ease 3s;
    &[open] {
      max-height: ${pxToRem(500)};
    }

    summary {
      list-style: none;
      font-size: ${pxToRem(20)};
      font-weight: 400;
      display: flex;
      justify-content: space-between;
      height: fit-content;
    }

    .accordion-btn {
      color: var(--col-60);
      border: 1px solid var(--col-10);
      border-radius: 0.375rem;
      display: flex;
      align-self: center;
      height: fit-content;
      margin-left: 1.5rem;
      transition: transform ease 0.5s;
    }

    &[open] {
      .accordion-btn {
        transform: rotate(90deg);
      }
    }

    p {
      margin-top: ${pxToRem(16)};
      cursor: initial;
      opacity: 70%;
    }
  }
`;
