import React from "react";
import { a } from "react-spring";

// Mask image is really important if we decide our carousel shouldn't span the whole window
const styles = {
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  item: { position: "absolute", height: "100%", willChange: "transform" },
};

interface ICarousel {
  items: any[];
  visible?: number;
  style?: any;
  children: any;
  bind: any;
  width: any;
  springs: any;
}

const Carousel = ({
  items,
  style,
  children,
  bind,
  width,
  springs,
}: ICarousel) => {
  if (items.length <= 2)
    console.warn(
      "The slider doesn't handle two or less items very well, please use it with an array of at least 3 items in length"
    );

  return (
    <div {...bind()} style={{ ...style, ...styles.container, width }}>
      {springs.map(({ x }: any, i: number) => (
        <a.div
          key={i}
          //@ts-ignore
          style={{ ...styles.item, width, x }}
          children={children(items[i], i)}
        />
      ))}
    </div>
  );
};

export default Carousel;
