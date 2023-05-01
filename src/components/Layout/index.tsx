import { FC } from "react";

import { ILayoutProps } from "src/interfaces";

import { Root } from "./style";
import { HeaderLeftBlock } from "../Header";
import { FooterLeftBlock } from "../Footer";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <Root>
      <HeaderLeftBlock isLeft={true} />
      {children}
      <FooterLeftBlock isLeft={true} />
    </Root>
  );
};

export default Layout;
