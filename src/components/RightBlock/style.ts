import { PALETTE } from 'src/utils/palette';
import styled from 'styled-components';
import Image from 'next/image';

export const RootRightBlock = styled.div`
  width: 50%;
  height: 100vh;
  background: ${PALETTE.lightPurple};
  display: flex;
  align-items: center;
`;
export const WrapperRightBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
`;

export const TextBlock = styled.div`
  width: 566px;
  margin-left: 149px;

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
      line-height: 56px;
    }
  }
`;
export const Img = styled(Image)`
  margin-left: 76px;
`;
