import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ListingsPageWrapper = styled.main`
  padding-top: ${pxToRem(76)};
  display: flex;
  position: relative;
  height: 100vh;
  > div {
    height: 100%;
  }
`;

export const FilterBox = styled.aside`
  background-color: var(--col-30);
  position: sticky;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: ${pxToRem(24)};
  justify-items: end;
  width: 25%;

  div {
    width: ${pxToRem(279)};
  }
`;

export const Listingsbox = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${pxToRem(16)};
  overflow-y: scroll;
  height: 100%;
`;
