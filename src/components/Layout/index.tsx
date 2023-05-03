import { FC, PropsWithChildren } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header isLeft />
      {children}
      <Footer isLeft />
    </>
  );
};

export default Layout;
