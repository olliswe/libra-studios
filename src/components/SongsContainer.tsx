import React, { useState } from "react";
import styled from "styled-components";
import { a } from "react-spring";
import AquiImg from "assets/images/aqui.jpeg";
import CitaImg from "assets/images/cita.jpg";
import DetrasImg from "assets/images/detras.jpg";
import LaventanaImg from "assets/images/laventana.jpg";
import SolaImg from "assets/images/sola.jpg";
import Carousel from "components/Slidev2";
import H1 from "components/elements/H1";

const items = [
  {
    css: `url(${AquiImg})`,
    height: 150,
    name: "aqui",
  },
  {
    css: `url(${CitaImg})`,
    height: 300,
    name: "cita",
  },
  {
    css: `url(${DetrasImg})`,
    height: 300,
    name: "detras",
  },
  {
    css: `url(${LaventanaImg})`,
    height: 300,
    name: "laventa",
  },
  {
    css: `url(${SolaImg})`,
    height: 300,
    name: "sola",
  },
];

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  box-shadow: 25px 25px 35px 5px #003333 inset,
    -25px -25px 35px 5px #003333 inset;
`;

const Menu = styled.div`
  width: 100%;
  height: 6rem;
`;

const CarouselWrapper = styled.div<{ ml: number }>`
  overflow: hidden;
  margin-left: ${({ ml }) => ml.toString() + "px"};
  display: flex;
  flex: 1;
`;

const NavBar = styled.div`
  height: 60px;
  width: 100%;
  padding: 20px 10px 0 10px;
`;

const NavbarHeader = styled(H1)`
  color: #ffbd66;
  font-size: 16px;
`;

const EmptyImage = styled.div`
  display: none;
`;

const SongsContainer = () => {
  const [active, setActive] = useState(0);

  return (
    <Main>
      <NavBar>
        <NavbarHeader>LIBRA STUDIOS</NavbarHeader>
      </NavBar>
      <CarouselWrapper ml={window.innerWidth / 20}>
        <Carousel
          items={items}
          active={active}
          setActive={setActive}
          itemWidth={window.innerWidth - window.innerWidth / 10}
        >
          {({ css }: { css: any }, i: number) => (
            <Content>
              <Image style={{ backgroundImage: css }} />
            </Content>
          )}
        </Carousel>
      </CarouselWrapper>
      <Menu />
      {items.map((item) => (
        <EmptyImage style={{ backgroundImage: item.css }} />
      ))}
    </Main>
  );
};

export default SongsContainer;
