import React, { useEffect } from "react";
import { items } from "helpers/items";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import useActiveStore from "hooks/useActiveStore";
import PlayButton from "components/elements/PlayButton";
import PauseButton from "components/elements/PauseButton";
import { theme } from "helpers/theme";

interface ISliderContent {
  bg: any;
  index: number;
}

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled(animated.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  background-color: rgba(0, 0, 0, 0.4); // Tint color
  background-blend-mode: multiply;
`;

const PlayWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const Wrapper = styled(animated.div)`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 6%;

  ${theme.media.phone} {
    left: unset;
    width: 100%;
    height: unset;
    bottom: 24%;
  }
`;

const SongNameImg = styled.img`
  ${theme.media.phone} {
    transform: scale(0.6);
  }
`;

const SliderContent = ({ bg, index }: ISliderContent) => {
  const active = useActiveStore((state) => state.active);
  const currentSong = useActiveStore((state) => state.currentSong);
  const setCurrentSong = useActiveStore((state) => state.setCurrentSong);
  const playing = useActiveStore((state) => state.playing);
  const setPlaying = useActiveStore((state) => state.setPlaying);
  const handlePlay = () => {
    setCurrentSong(active);
    setPlaying(true);
  };
  const handlePause = () => {
    setPlaying(false);
  };

  const [animProps, setAnim] = useSpring(() => ({
    o: 0,
  }));

  useEffect(() => {
    setAnim({
      o: index === active ? 1 : 0,
      config: { duration: 2000 },
    });
  }, [index, active, setAnim]);

  return (
    <Content>
      <Image style={{ backgroundImage: bg }} />
      <PlayWrapper>
        {playing && active === currentSong ? (
          <PauseButton onClick={handlePause} />
        ) : (
          <PlayButton onClick={handlePlay} />
        )}
      </PlayWrapper>
      <Wrapper
        style={{ opacity: animProps.o.interpolate((o) => o * o) as any }}
      >
        <SongNameImg
          src={items[active].nameImg}
          alt=""
          style={{ height: items[active].nameHeight }}
        />
      </Wrapper>
    </Content>
  );
};

export default SliderContent;
