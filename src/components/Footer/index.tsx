import { FC } from 'react';
import { FooterText, RootFooter } from './style';
import classNames from 'classnames';

interface FooterLeftBlock {
  isLeft?: boolean;
}

const FooterLeftBlock: FC<FooterLeftBlock> = ({ isLeft }) => {
  const currentYear = new Date().getFullYear();

  return (
    <RootFooter className={classNames({ isLeft: isLeft })}>
      <FooterText>© Edegvana {currentYear}</FooterText>
    </RootFooter>
  );
};

export { FooterLeftBlock };
