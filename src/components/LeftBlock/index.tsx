import { RootLeftBlock, WrapperForm } from "./style";

import Form from "../Form";
import { HeaderLeftBlock } from "../Header";
import { FooterLeftBlock } from "../Footer";

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
