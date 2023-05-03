import styled from 'styled-components';

import { PALETTE } from 'src/utils/palette';

export const RootFooter = styled.div`
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 1100px) {
    display: none;
  }

  &.isLeft {
    display: none;

    @media (max-width: 1100px) {
      display: flex;
      justify-content: center;
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
