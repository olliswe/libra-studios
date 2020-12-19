// import React from "react";
// import clamp from "lodash-es/clamp";
// import { animated, useSprings } from "react-spring";
// import { useDrag } from "react-use-gesture";
// import styled from "styled-components";
// import AquiImg from "../assets/images/aqui.jpeg";
// import CitaImg from "../assets/images/cita.jpg";
// import DetrasImg from "../assets/images/detras.jpg";
// import LaventanaImg from "../assets/images/laventana.jpg";
// import SolaImg from "../assets/images/sola.jpg";
// import { useHistory, useRouteMatch } from "react-router";
//
// const pages = [AquiImg, CitaImg, DetrasImg, LaventanaImg, SolaImg];
//
// const Wrapper = styled(animated.div)`
//   position: absolute;
//   width: 100vw;
//   height: 100vh;
//   will-change: transform;
// `;
//
// const Image = styled(animated.div)`
//   touch-action: none;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center center;
//   width: 100%;
//   height: 100%;
//   will-change: transform;
//   box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
//     0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
// `;
//
// const ImageSlider = ({ index }: { index: number }) => {
//   const history = useHistory();
//   const [props, set] = useSprings(pages.length, (i) => ({
//     x: i * window.innerWidth,
//     scale: 1,
//     display: "block",
//   }));
//   const bind = useDrag(
//     ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
//       if (active && distance > window.innerWidth / 3) {
//         cancel(
//           //@ts-ignore
//           history.push(clamp(index + (xDir > 0 ? -1 : 1), 0, pages.length - 1))
//         );
//       }
//       //@ts-ignore
//       set((i: number) => {
//         if (i < index - 1 || i > index + 1) return { display: "none" };
//         const x = (i - index) * window.innerWidth + (active ? mx : 0);
//         const scale = active ? 1 - distance / window.innerWidth / 2 : 1;
//         return { x, scale, display: "block" };
//       });
//     }
//   );
//
//   return (
//     <>
//       {props.map(({ x, display, scale }, i) => (
//         //@ts-ignore
//         <Wrapper {...bind()} key={i} style={{ display, x }}>
//           {/*@ts-ignore*/}
//           <Image style={{ scale, backgroundImage: `url(${pages[i]})` }} />
//         </Wrapper>
//       ))}
//     </>
//   );
// };
//
// const Hoc = () => {
//   const match = useRouteMatch<{ id: string }>("/:id");
//   const index = match?.params?.id;
//
//   if (!index) {
//     return <div></div>;
//   }
//
//   return <ImageSlider index={parseInt(index)} />;
// };
//
// export default Hoc;

export {};
