import styled from 'styled-components';
import Image from 'next/image';

import { PALETTE } from 'src/utils/palette';

export const RootRightBlock = styled.div`
  width: 50%;
  min-height: 100vh;
  background: ${PALETTE.lightPurple};
  display: flex;
  justify-content: center;

  @media (max-width: 1450px) {
    width: 55%;
  }

  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: calc(100vh - 63px);
  }
`;

export const WrapperRightBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 80px;
`;

export const TextBlock = styled.div`
  max-width: 566px;

  & h1 {
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
    color: ${PALETTE.primary};
    line-height: 56px;
  }

  & h3 {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: ${PALETTE.secondary};
    line-height: 24px;

    & span {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 24px;
      color: ${PALETTE.blue};
    }
  }

  @media (max-width: 1200px) {
    max-width: 490px;

    & h1 {
      font-size: 36px;
      line-height: 42px;
    }

    & h3 {
      margin: 0 auto;
      max-width: 420px;
    }
  }
`;

export const Img = styled(Image)`
  @media (max-width: 1200px) {
    width: 586px;
    height: 350px;
  }

  @media (max-width: 600px) {
    width: 468px;
    height: 280px;
  }

  @media (max-width: 470px) {
    width: 374px;
    height: 224px;
  }

  @media (max-width: 420px) {
    width: 336px;
    height: 201px;
  }
`;
