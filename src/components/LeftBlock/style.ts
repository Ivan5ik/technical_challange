import styled from 'styled-components';

import { PALETTE } from 'src/utils/palette';

export const RootLeftBlock = styled.div`
  width: 50%;
  min-height: calc(100vh - 110px);
  background: ${PALETTE.white};

  @media (max-width: 1450px) {
    width: 45%;
  }

  @media (max-width: 1100px) {
    width: 100%;
    min-height: calc(100vh - 47px);
  }
`;

export const FormWrapper = styled.div`
  min-height: calc(100vh - 110px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
