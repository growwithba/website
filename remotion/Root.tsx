import { Composition } from "remotion";
import { HelloWorld } from "./HelloWorld";
import { Think14Video, TOTAL } from "./think14/Think14Video";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Think14"
        component={Think14Video}
        durationInFrames={TOTAL}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ title: "Prime Directory" }}
      />
    </>
  );
};
