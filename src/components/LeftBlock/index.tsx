import { FC } from "react";
import { RootLeftBlock, WrapperForm } from "./style";
import { HeaderLeftBlock } from "../Header";
import { FooterLeftBlock } from "../Footer";
import Form from "../Form";

const LeftBlock = () => {
  return (
    <RootLeftBlock>
      <HeaderLeftBlock />
      <WrapperForm>
        <Form />
      </WrapperForm>
      <FooterLeftBlock />
    </RootLeftBlock>
  );
};

export { LeftBlock };
