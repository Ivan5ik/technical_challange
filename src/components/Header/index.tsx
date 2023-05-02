import { FC } from "react";
import { Img, RootHeader } from "./style";
import classNames from "classnames";
import Link from "next/link";

interface IHeaderLeftBlock {
  isLeft?: boolean;
}

const HeaderLeftBlock: FC<IHeaderLeftBlock> = ({ isLeft }) => {
  return (
    <RootHeader className={classNames({ isLeft: isLeft })}>
      <Link href={"/"} legacyBehavior>
        <Img
          src={"/assets/logo.png"}
          width={"171"}
          height={"38"}
          alt={"logo"}
          style={{ cursor: "pointer" }}
        />
      </Link>
    </RootHeader>
  );
};

export { HeaderLeftBlock };
