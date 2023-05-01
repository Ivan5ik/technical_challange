import { FC } from "react";
import { RootLeftBlock, WrapperForm } from "./style";
import { HeaderLeftBlock } from "../Header";
import Form from "../Form";

const LeftBlock = () => {
  return (
    <RootLeftBlock>
      <HeaderLeftBlock />
      <WrapperForm>
        <Form />
      </WrapperForm>
    </RootLeftBlock>
  );
};

export { LeftBlock };
