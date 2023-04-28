import { FC } from 'react';

import { ILayoutProps } from 'src/interfaces';

import { Root } from './style';

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Layout;
