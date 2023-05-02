import { RootLeftBlock, FormWrapper } from "./style";

import Form from "../Form";
import { HeaderLeftBlock } from "../Header";
import { FooterLeftBlock } from "../Footer";

const LeftBlock = () => {
  return (
    <RootLeftBlock>
      <HeaderLeftBlock />
      <FormWrapper>
        <Form />
      </FormWrapper>
      <FooterLeftBlock />
    </RootLeftBlock>
  );
};

export { LeftBlock };
