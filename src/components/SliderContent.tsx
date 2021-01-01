import React, { useEffect } from "react";
import { items } from "helpers/items";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import useActiveStore from "hooks/useActiveStore";
import PlayButton from "components/elements/PlayButton";
import PauseButton from "components/elements/PauseButton";

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
`;

const StyledImg = styled.img``;

const SliderContent = ({ bg, index }: ISliderContent) => {
  const active = useActiveStore((state) => state.active);
  const currentSong = useActiveStore((state) => state.currentSong);
  const setCurrentSong = useActiveStore((state) => state.setCurrentSong);
  const handlePlay = () => setCurrentSong(active);
  const handlePause = () => setCurrentSong(null);
  const isPlaying = active === currentSong;

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
        {isPlaying ? (
          <PauseButton onClick={handlePause} />
        ) : (
          <PlayButton onClick={handlePlay} />
        )}
      </PlayWrapper>
      <Wrapper
        style={{ opacity: animProps.o.interpolate((o) => o * o) as any }}
      >
        <StyledImg
          src={items[active].nameImg}
          alt=""
          style={{ height: items[active].nameHeight }}
        />
      </Wrapper>
    </Content>
  );
};

export default SliderContent;
