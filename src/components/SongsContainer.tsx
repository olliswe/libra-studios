import React, { useRef } from "react";
import styled from "styled-components";
import AquiImg from "assets/images/aqui.jpeg";
import CitaImg from "assets/images/cita.jpg";
import DetrasImg from "assets/images/detras.jpg";
import LaventanaImg from "assets/images/laventana.jpg";
import SolaImg from "assets/images/sola.jpg";
import Carousel from "components/Slidev2";
import useSliderLogic from "hooks/useSliderLogic";
import useActiveStore from "hooks/useActiveStore";
import SliderContent from "components/SliderContent";
import MusicPlayer from "components/MusicPlayer";
import { CurrentSong } from "./Shared";
import Navbar from "components/Navbar";

export const items = [
  {
    css: `url(${AquiImg})`,
    label: "Aqui",
    mp3: "/songs/Aqui.mp3",
  },
  {
    css: `url(${CitaImg})`,
    label: "Cita",
    mp3: "/songs/Cita.mp3",
  },
  {
    css: `url(${DetrasImg})`,
    label: "Detras del Muro",
    mp3: "/songs/DetrasdelMuro.mp3",
  },
  {
    css: `url(${LaventanaImg})`,
    label: "La Ventana",
    mp3: "/songs/LaVentana.mp3",
  },
  {
    css: `url(${SolaImg})`,
    label: "Dunas",
    mp3: "/songs/Dunas.mp3",
  },
];

const Main = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Menu = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
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
