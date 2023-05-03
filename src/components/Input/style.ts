import styled from 'styled-components';

import { PALETTE } from 'src/utils/palette';

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
export const LavelComlicatedPassword = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;
export const Block1 = styled.div`
  width: 123px;
  height: 6px;
  border-radius: 42px;
  background: ${PALETTE.lightGrey};

  &.block1 {
    background: linear-gradient(90deg, #5268d3 0%, #435acb 100%);
  }
`;
export const Block2 = styled.div`
  width: 123px;
  height: 6px;
  border-radius: 42px;
  background-color: ${PALETTE.lightGrey};

  &.block2 {
    background: linear-gradient(90deg, #5268d3 0%, #435acb 100%);
  }
`;
export const Block3 = styled.div`
  border-radius: 42px;
  width: 123px;
  height: 6px;
  background-color: ${PALETTE.lightGrey};

  &.block3 {
    background: linear-gradient(90deg, #5268d3 0%, #435acb 100%);
  }
`;
