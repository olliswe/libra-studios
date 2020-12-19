import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { a } from "react-spring";
import AquiImg from "./assets/images/aqui.jpeg";
import CitaImg from "./assets/images/cita.jpg";
import DetrasImg from "./assets/images/detras.jpg";
import LaventanaImg from "./assets/images/laventana.jpg";
import SolaImg from "./assets/images/sola.jpg";
import Carousel from "./components/Slidev2";

const images = [AquiImg, CitaImg, DetrasImg, LaventanaImg, SolaImg];

const items = [
  {
    css:
      "url(https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 150,
    slug: "/one",
  },
  {
    css:
      "url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 300,
    slug: "/two",
  },
  {
    css:
      "url(https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 300,
    slug: "/three",
  },
];

const Main = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled(a.div)`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Main>
        <Carousel items={items}>
          {({ css }: { css: any }, i: number) => (
            <Content>
              <Image style={{ backgroundImage: css }} />
            </Content>
          )}
        </Carousel>
      </Main>
    </BrowserRouter>
  );
};

export default App;
