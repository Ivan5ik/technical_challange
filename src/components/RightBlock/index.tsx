import { Img, RootRightBlock, TextBlock, WrapperRightBlock } from "./style";

const RightBlock = () => {
  return (
    <RootRightBlock>
      <WrapperRightBlock>
        <TextBlock>
          <h1>Earn free crypto after making your first purchase.</h1>
          <h3>
            *The average Edgevana operator earns $950 a month in incentives.
            <span> See terms</span>
          </h3>
        </TextBlock>
        <Img
          src={"/assets/metrics.svg"}
          width={"710"}
          height={"437"}
          alt={"metrics"}
        />
      </WrapperRightBlock>
    </RootRightBlock>
  );
};

export { RightBlock };
