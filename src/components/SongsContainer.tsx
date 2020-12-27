import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import AquiImg from "assets/images/aqui.jpeg";
import CitaImg from "assets/images/cita.jpg";
import DetrasImg from "assets/images/detras.jpg";
import LaventanaImg from "assets/images/laventana.jpg";
import SolaImg from "assets/images/sola.jpg";
import Carousel from "components/Slidev2";
import H1 from "components/elements/H1";
import useSliderLogic from "hooks/useSliderLogic";
import useActiveStore from "hooks/useActiveStore";
import SliderContent from "components/SliderContent";
import MusicPlayer from "components/MusicPlayer";

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

const NavBar = styled.div`
  height: 100px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 2;
`;

const StyledH1 = styled(H1)`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 18px;
`;

const EmptyImage = styled.div`
  display: none;
`;

const CurrentSong = styled.span<{ isActive: boolean }>`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  color: ${({ theme }) => theme.colors.orange};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  text-transform: uppercase;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const SongsContainer = () => {
  const active = useActiveStore((state) => state.active);

  const prev = useRef([0, 1]);
  const index = useRef(0);

  const { bind, debounceTransition, springs, width } = useSliderLogic({
    itemWidth: "full",
    items,
    index,
    prev,
  });

  const handleClick = useCallback(
    (clickedIndex) => {
      if (clickedIndex < active) {
        debounceTransition(clickedIndex + (items.length - active));
        return;
      }
      debounceTransition(clickedIndex - active);
    },
    [active, debounceTransition]
  );

  return (
    <>
      <MusicPlayer />
      <Main>
        <NavBar>
          <StyledH1>LIBRA STUDIOS</StyledH1>
        </NavBar>
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
                handleClick(i);
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
