import { FC } from 'react';
import { Img, RootHeader } from './style';

const HeaderLeftBlock = () => {
  return (
    <RootHeader>
      <Img src={'/assets/logo.png'} width={'171'} height={'38'} alt={'logo'} />
    </RootHeader>
  );
};

export { HeaderLeftBlock };
