import styled from "styled-components";
import Image from "next/image";

export const RootHeader = styled.div`
  width: 100%;

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
export const Img = styled(Image)`
  margin: 21px 0 0 24px;
`;
