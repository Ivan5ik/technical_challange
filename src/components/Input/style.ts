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

  & .input {
    margin-top: 8px;
    width: 100%;
    height: 52px;
    padding-left: 18px;
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

  & .isNameField {
    max-width: 192px;
  }

  & .errorText {
    font-size: 12px;
    line-height: 17px;
    color: ${PALETTE.red};
  }
`;