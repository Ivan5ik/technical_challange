import { FC } from "react";
import { Img, RootHeader } from "./style";
import classNames from "classnames";

interface IHeaderLeftBlock {
  isLeft?: boolean;
}

const HeaderLeftBlock: FC<IHeaderLeftBlock> = ({ isLeft }) => {
  return (
    <RootHeader className={classNames({ isLeft: isLeft })}>
      <Img src={"/assets/logo.png"} width={"171"} height={"38"} alt={"logo"} />
    </RootHeader>
  );
};

export { HeaderLeftBlock };
