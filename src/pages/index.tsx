import { LeftBlock } from 'src/components/LeftBlock';
import { RightBlock } from 'src/components/RightBlock';

import { RootHome } from 'src/styles/home/style';

export default function Home() {
  return (
    <RootHome>
      <LeftBlock />
      <RightBlock />
    </RootHome>
  );
}
