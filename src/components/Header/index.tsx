import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { Img, RootHeader } from './style';

interface IHeader {
  isLeft?: boolean;
}

const Header: FC<IHeader> = ({ isLeft }) => {
  return (
    <RootHeader className={classNames({ isLeft: isLeft })}>
      <Link href={'/'} legacyBehavior>
        <Img
          src={'/assets/logo.png'}
          width={'171'}
          height={'38'}
          alt={'logo'}
          style={{ cursor: 'pointer' }}
        />
      </Link>
    </RootHeader>
  );
};

export { Header };
