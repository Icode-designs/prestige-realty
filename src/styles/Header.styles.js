import styled from "styled-components";
import { pxToRem } from "@/utils/pxToRem";

export const HeaderBox = styled.header`
  background-color: var(--col-10);
  position: fixed;
  width: 100%;
  z-index: 20;

  > div {
    padding: ${pxToRem(16)} ${pxToRem(24)};
    max-width: var(--max-w);
    margin: var(--centered);
    background-color: var(--col-10);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: ${({ $navOpen }) => ($navOpen ? pxToRem(62) : "-100vh")};
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--col-40);
    z-index: -1;
    opacity: 50%;
    transition: top ease 0.5s;
    transition-delay: 0.3s;
  }

  nav {
    display: grid;
    height: fit-content;
    padding: ${pxToRem(24)} 0;
    grid-template-columns: 1fr;
    grid-row-gap: ${pxToRem(32)};
    align-content: start;
    justify-items: center;
    position: absolute;
    width: 100%;
    top: ${pxToRem(62)};
    left: ${({ $navOpen }) => ($navOpen ? 0 : "100%")};
    background-color: var(--col-30);
    z-index: 25;
    transition: left ease 0.3s;
    ul {
      font-weight: 500;
      padding: ${pxToRem(32)} ${pxToRem(24)};
      text-align: center;
      height: fit-content;
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: ${pxToRem(24)};
      .logoutBtn {
        color: var(--col-30);
        background: none;
        border: none;
      }

      a {
        color: var(--col-10);
        font-size: ${pxToRem(32)};

        &.dashboard {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: ${pxToRem(8)};
        }
      }

      .active {
        color: var(--col-20);
      }
    }
  }

  @media (min-width: ${pxToRem(912)}) {
    padding: ${pxToRem(16)} ${pxToRem(24)};
    > div {
      padding: 0;
    }
    nav {
      display: flex;
      gap: ${pxToRem(16)};
      position: static;
      background: none;
      height: fit-content;
      width: fit-content;
      align-items: center;
      padding: 0;
      ul {
        display: flex;
        gap: ${pxToRem(0)};
        padding: 0;
        align-items: center;
        width: fit-content;
        a {
          position: relative;
          padding: ${pxToRem(8)};
          z-index: 25;
          color: var(--col-40);
          transition: all ease 0.5s;
          font-size: ${pxToRem(16)};

          &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: var(--col-20);
            height: ${pxToRem(0)};
            transition: all ease 0.2s;
            z-index: -1;
          }
          &:hover {
            &::after {
              height: ${pxToRem(3)};
            }
          }
        }
      }
    }

    .active {
      &::after {
        height: ${pxToRem(3)};
      }
    }
  }
`;

export const ToggleNavbtn = styled.button`
  height: fit-content;
  width: fit-content;
  background: none;
  border: none;
  font-size: ${pxToRem(24)};
`;
