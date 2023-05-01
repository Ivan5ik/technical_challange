import { PALETTE } from "src/utils/palette";
import styled from "styled-components";

export const RootForm = styled.div`
  max-width: 400px;
  font-family: "Inter";
  font-style: normal;

  & .name {
    margin-top: 8px;
    width: 100%;
    height: 52px;
    background: ${PALETTE.grey};
    border-radius: 8px;
    border: none;
    color: ${PALETTE.secondary};
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    &:focus-visible {
      outline: auto;
    }
  }

  & .nameOfLastName {
    max-width: 192px;
  }

  & .position {
    position: relative;
  }

  & .svgEye {
    position: absolute;
    cursor: pointer;
    top: 56%;
    transform: translate(0, -50%);
    right: 20px;
  }

  & .submit {
    display: block;
    width: 100%;
    height: 52px;
    background: ${PALETTE.primaryLight};
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: ${PALETTE.white};
    cursor: pointer;
    margin-top: 40px;
  }
`;

export const WrapperName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormTitle = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: ${PALETTE.primary};
  padding-bottom: 11px;
`;

export const FormDescription = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${PALETTE.secondary};
  padding-bottom: 32px;
`;

export const BusinesDescription = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${PALETTE.primaryLight};
  padding-top: 30px;
`;
