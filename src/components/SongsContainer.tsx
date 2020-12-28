import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Carousel from "components/Slidev2";
import useSliderLogic from "hooks/useSliderLogic";
import useActiveStore from "hooks/useActiveStore";
import SliderContent from "components/SliderContent";
import MusicPlayer from "components/MusicPlayer";
import { CurrentSong } from "./Shared";
import Navbar from "components/Navbar";
import { StringParam, useQueryParam } from "use-query-params";
import { items } from "helpers/items";

const Main = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Menu = styled.div`
  height: 6rem;
  display: flex;
  padding: 0 5%;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const CarouselWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const EmptyImage = styled.div`
  display: none;
`;

const SongsContainer = () => {
  const active = useActiveStore((state) => state.active);

  const prev = useRef([0, 1]);
  const index = useRef(0);

  const { bind, goToIndex, springs, width } = useSliderLogic({
    itemWidth: "full",
    items,
    index,
    prev,
  });

  const [track] = useQueryParam("track", StringParam);

  useEffect(() => {
    if (track) {
      const foundTrack = items.findIndex((x) => x.id === track);
      if (foundTrack > -1) {
        goToIndex(foundTrack);
      }
    }
  }, [track, goToIndex]);

  return (
    <>
      <MusicPlayer goToIndex={goToIndex} />
      <Main>
        <Navbar />
        <CarouselWrapper>
          <Carousel items={items} bind={bind} width={width} springs={springs}>
            {({ css }: { css: any }, i: number) => (
              <SliderContent bg={css} key={i} />
            )}
          </Carousel>
        </CarouselWrapper>
        <Menu>
          {items.map((item, i) => (
            <CurrentSong
              key={i}
              isActive={i === active}
              onClick={() => {
                goToIndex(i);
              }}
            >
              {item.label}
            </CurrentSong>
          ))}
        </Menu>
        {items.map((item, index) => (
          <EmptyImage key={index} style={{ backgroundImage: item.css }} />
        ))}
      </Main>
    </>
  );
};

export default SongsContainer;
