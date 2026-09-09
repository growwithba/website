import { Composition } from "remotion";
import { HelloWorld } from "./HelloWorld";
import { Think14Video, TOTAL } from "./think14/Think14Video";
import { CINE_TOTAL, Think14Cinematic } from "./think14/cine/Think14Cinematic";
import { REEL_FRAMES } from "./think14/reel/edit";
import { Think14Reel } from "./think14/reel/Reel";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Think14Reel"
        component={Think14Reel}
        durationInFrames={REEL_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Think14Cinematic"
        component={Think14Cinematic}
        durationInFrames={CINE_TOTAL}
        fps={30}
        width={1920}
        height={1080}
      />
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
