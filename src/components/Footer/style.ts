import { PALETTE } from "src/utils/palette";
import styled from "styled-components";

export const RootFooter = styled.div`
  width: 100%;
  font-family: "Inter";
  font-style: normal;

  @media (max-width: 1100px) {
    display: none;
  }

  &.isLeft {
    display: none;

    @media (max-width: 1100px) {
      display: flex;
    }
  }
`;

export const FooterText = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${PALETTE.secondary};
  padding-bottom: 32px;
`;
