import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { a } from "react-spring";
import AquiImg from "assets/images/aqui.jpeg";
import CitaImg from "assets/images/cita.jpg";
import DetrasImg from "assets/images/detras.jpg";
import LaventanaImg from "assets/images/laventana.jpg";
import SolaImg from "assets/images/sola.jpg";
import Carousel from "components/Slidev2";
import H1 from "components/elements/H1";
import useSliderLogic from "hooks/useSliderLogic";

const items = [
  {
    css: `url(${AquiImg})`,
    height: 150,
    name: "aqui",
    label: "Aqui",
  },
  {
    css: `url(${CitaImg})`,
    height: 300,
    name: "cita",
    label: "Cita",
  },
  {
    css: `url(${DetrasImg})`,
    height: 300,
    name: "detras",
    label: "Detras",
  },
  {
    css: `url(${LaventanaImg})`,
    height: 300,
    name: "laventa",
    label: "La Ventana",
  },
  {
    css: `url(${SolaImg})`,
    height: 300,
    name: "sola",
    label: "Sola",
  },
];

const Main = styled.div`
  height: 100vh;
  width:100vw;

`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: url('https://github.com/chenglou/react-motion/raw/master/demos/demo8-draggable-list/cursor.png') 39 39, auto;
  background-color: rgba(0,0,0,.3); // Tint color
  background-blend-mode: multiply;

`;

const Menu = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom:0
`;

const CarouselWrapper = styled.div`
 height:100%;
 width:100%;
`;

const NavBar = styled.div`
  height: 100px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  position:absolute;
  top:0;
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
  const [active, setActive] = useState(0);
  const prev = useRef([0, 1]);
  const index = useRef(0);

  const { bind, debounceTransition, springs, width } = useSliderLogic({
    itemWidth: "full",
    items,
    index,
    prev,
    setActive,
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
    <Main>
      <NavBar>
        <StyledH1>LIBRA STUDIOS</StyledH1>
      </NavBar>
      <CarouselWrapper>
        <Carousel items={items} bind={bind} width={width} springs={springs}>
          {({ css }: { css: any }, i: number) => (
            <Content>
                <Image style={{ backgroundImage: css }}/>
              <StyledH1
                  style={{
                    position: "absolute",
                    bottom: "20%",
                    left: "10%",
                    fontSize: "48px",
                  }}
              >
                {items[active].label}
              </StyledH1>
            </Content>
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
      {items.map((item) => (
        <EmptyImage key={item.name} style={{ backgroundImage: item.css }} />
      ))}
    </Main>
  );
};

export default SongsContainer;
