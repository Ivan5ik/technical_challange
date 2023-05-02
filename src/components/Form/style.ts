import { PALETTE } from 'src/utils/palette';

import styled from 'styled-components';

export const RootForm = styled.div`
  max-width: 400px;
  font-family: 'Inter';
  font-style: normal;

  & .labelCheckBox {
    display: flex;
    align-items: center;
    position: relative;
    align-items: start;
  }

  & .labelCheckBox > span {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    border: 2px solid ${PALETTE.primary};
    margin-right: 15px;
    border-radius: 3px;
    transition: all 0.3s;
    cursor: pointer;
  }

  & .inputCheckBox {
    width: 0;
    height: 0;
    opacity: 0;
  }

  & .done {
    position: absolute;
    visibility: hidden;
    cursor: pointer;
    z-index: 2;
  }

  & .inputCheckBox:checked + label > span {
    border: 10px solid ${PALETTE.primary};
    animation: bounce 250ms;
    position: relative;
    z-index: 2;
  }

  & .inputCheckBox:checked + label > .done {
    visibility: visible;
    top: 4px;
    left: 3px;
  }

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

    @media (max-width: 600px) {
      max-width: 100%;
    }
  }

  & .position {
    position: relative;
  }

  & .privacy {
    line-height: 24px;
    color: ${PALETTE.blue};
  }

  & .svgEye {
    position: absolute;
    cursor: pointer;
    top: 51%;
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

  & .mainForm {
    @media (max-width: 470px) {
      margin: 0 18px 0 18px;
    }
  }
`;

export const LavelComlicatedPassword = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Block1 = styled.div`
  width: 123px;
  height: 6px;
  border-radius: 42px;
  background: linear-gradient(90deg, #5268d3 0%, #435acb 100%);
`;
export const Block2 = styled.div`
  width: 123px;
  height: 6px;
  border-radius: 42px;
  background-color: green;
`;
export const Block3 = styled.div`
  border-radius: 42px;
  width: 123px;
  height: 6px;
  background-color: ${PALETTE.lightGrey};
`;

export const TextPrivacy = styled.div`
  font-weight: 300;
  font-size: 15px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${PALETTE.secondary};
`;

export const WrapperName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const FormTitle = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: ${PALETTE.primary};
  padding-bottom: 11px;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export const FormDescription = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${PALETTE.secondary};
  padding-bottom: 32px;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export const BusinesDescription = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${PALETTE.primary};
  padding-top: 30px;
`;

export const StyledLink = styled.a`
  font-weight: 600;
  color: ${PALETTE.primaryLight};
  cursor: pointer;
`;
