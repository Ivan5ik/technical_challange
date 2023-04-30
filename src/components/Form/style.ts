import { PALETTE } from 'src/utils/palette';
import styled from 'styled-components';

export const RootForm = styled.div`
  max-width: 400px;

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

export const LabelForm = styled.label`
  color: ${PALETTE.primary};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: block;
`;
export const WrapperName = styled.div`
  display: flex;
`;
