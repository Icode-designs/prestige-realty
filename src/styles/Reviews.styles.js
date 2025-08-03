import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ReviewCard = styled.li`
  display: grid;
  padding: ${pxToRem(32)} ${pxToRem(16)};
  grid-row-gap: ${pxToRem(16)};
  border-radius: ${pxToRem(12)};
  justify-items: center;
  text-align: center;
  transition: all ease 0.3s;
  cursor: default;
  &:hover {
    box-shadow: 0 ${pxToRem(6)} ${pxToRem(10)} rgba(0, 0, 0, 0.1);
    transform: translateY(${pxToRem(-10)});
  }
`;
