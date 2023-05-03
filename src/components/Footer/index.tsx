import { FC } from 'react';
import classNames from 'classnames';

import { FooterText, RootFooter } from './style';

interface Footer {
  isLeft?: boolean;
}

const Footer: FC<Footer> = ({ isLeft }) => {
  const currentYear = new Date().getFullYear();

  return (
    <RootFooter className={classNames({ isLeft })}>
      <FooterText>© Edegvana {currentYear}</FooterText>
    </RootFooter>
  );
};

export { Footer };
