import { PALETTE } from "src/utils/palette";
import styled from "styled-components";

export const LabelForm = styled.label`
  color: ${PALETTE.primary};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: block;
  position: relative;
  padding-bottom: 20px;
  height: 100px;

  & .nameOfLastName {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  & .input {
    margin-top: 8px;
    width: 100%;
    height: 52px;
    padding: 0 18px 0 18px;
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

  & .errorText {
    font-size: 12px;
    line-height: 17px;
    color: ${PALETTE.red};
  }

  & .input::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: ${PALETTE.secondary};
  }
`;
