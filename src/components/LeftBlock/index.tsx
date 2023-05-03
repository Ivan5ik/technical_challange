import Form from '../Form';
import { Header } from '../Header';

import { RootLeftBlock, FormWrapper } from './style';

const LeftBlock = () => {
  return (
    <RootLeftBlock>
      <Header />
      <FormWrapper>
        <Form />
      </FormWrapper>
      <Header />
    </RootLeftBlock>
  );
};

export { LeftBlock };
