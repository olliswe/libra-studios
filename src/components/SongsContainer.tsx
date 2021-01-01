import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Carousel from "components/Slidev2";
import useSliderLogic from "hooks/useSliderLogic";
import useActiveStore from "hooks/useActiveStore";
import SliderContent from "components/SliderContent";
import MusicPlayer from "components/MusicPlayer";
import Navbar from "components/Navbar";
import { StringParam, useQueryParam } from "use-query-params";
import { items } from "helpers/items";
import Menu from "components/Menu";

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

const CarouselWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const SongsContainer = () => {
  const reset = useActiveStore((state) => state.reset);
  const playerRef = useRef<any>();

  const prev = useRef([0, 1]);
  const index = useRef(0);

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const { bind, goToIndex, springs, width } = useSliderLogic({
    itemWidth: "full",
    items,
    index,
    prev,
  });

  const [track] = useQueryParam("track", StringParam);
  const redirected = useRef(false);

  useEffect(() => {
    if (track && !redirected.current) {
      const foundTrack = items.findIndex((x) => x.id === track);
      if (foundTrack > -1) {
        goToIndex(foundTrack);
        redirected.current = true;
      }
    }
  }, [track, goToIndex]);

  return (
    <Main>
      <MusicPlayer goToIndex={goToIndex} playerRef={playerRef} />

      <Navbar playerRef={playerRef} />
      <CarouselWrapper>
        <Carousel items={items} bind={bind} width={width} springs={springs}>
          {({ css }: { css: any }, i: number) => (
            <SliderContent bg={css} key={i} index={i} />
          )}
        </Carousel>
      </CarouselWrapper>
      <Menu goToIndex={goToIndex} />
    </Main>
  );
};

export default SongsContainer;
