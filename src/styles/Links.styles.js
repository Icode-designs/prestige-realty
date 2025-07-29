import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const SocialLinksBox = styled.div`
  font-size: ${pxToRem(24)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(16)};
  color: var(--col-10);
`;

export const UsefullLinksBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxToRem(24)};
  @media (min-width: ${pxToRem(768)}) and (max-width: ${pxToRem(912)}) {
    display: flex;
    justify-content: space-between;
    gap: ${pxToRem(125)};
  }
`;
