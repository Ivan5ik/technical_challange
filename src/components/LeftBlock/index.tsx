import { FC } from 'react';
import { RootLeftBlock } from './style';
import { HeaderLeftBlock } from '../Header';

const LeftBlock = () => {
  return (
    <RootLeftBlock>
      <HeaderLeftBlock />
    </RootLeftBlock>
  );
};

export { LeftBlock };
