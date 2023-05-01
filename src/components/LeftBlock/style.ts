import { PALETTE } from "src/utils/palette";
import styled from "styled-components";

export const RootLeftBlock = styled.div`
  width: 50%;
  height: 100vh;
  background: ${PALETTE.white};

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
export const WrapperForm = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
