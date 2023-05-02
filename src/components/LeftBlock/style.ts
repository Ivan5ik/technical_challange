import { PALETTE } from "src/utils/palette";
import styled from "styled-components";

export const RootLeftBlock = styled.div`
  width: 50%;
  height: calc(100vh - 110px);
  background: ${PALETTE.white};

  @media (max-width: 1450px) {
    width: 45%;
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: calc(100vh - 47px);
  }
`;

export const WrapperForm = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
