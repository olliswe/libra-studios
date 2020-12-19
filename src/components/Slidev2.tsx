import React, { useCallback, useRef } from "react";
import { useGesture } from "react-use-gesture";
import { a, useSprings } from "react-spring";

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
  itemWidth?: "full" | number;
  visible?: number;
  style?: any;
  children: any;
  sensitivity?: number;
  active: number;
  setActive: (active: number) => void;
}

const Carousel = ({
  items,
  itemWidth = "full" as "full",
  visible = 1,
  style,
  children,
  sensitivity = 1,
  setActive,
}: ICarousel) => {
  const windowWidth = itemWidth === "full" ? window.innerWidth : itemWidth;
  let width = itemWidth === "full" ? windowWidth : itemWidth;

  const idx = useCallback((x, l = items.length) => (x < 0 ? x + l : x) % l, [
    items,
  ]);
  const getPos = useCallback(
    (i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx),
    [idx]
  );
  // Important only if specifyng item width separately, centers the element in the carousel
  const offset = itemWidth === "full" ? 0 : (windowWidth - itemWidth) / 2;
  const [springs, set] = useSprings(items.length, (i) => ({
    x: (i < items.length - 1 ? i : -1) * width + offset,
  }));
  const prev = useRef([0, 1]);
  const index = useRef(0);
  const runSprings = useCallback(
    (y, vy, down, xDir, cancel, distance, xMove) => {
      // This decides if we move over to the next slide or back to the initial
      if (down && (distance > width / 2 || Math.abs(vy) > sensitivity)) {
        cancel((index.current = index.current + (xDir > 0 ? -1 : 1)));
      }
      if (index.current + 1 > items.length) {
        setActive(index.current % items.length);
      } else if (index.current < 0) {
        setActive(items.length + (((index.current + 1) % items.length) - 1));
      } else {
        setActive(index.current);
      }

      // The actual scrolling value
      const finalY = index.current * width;
      // Defines currently visible slides
      const firstVis = idx(Math.floor(finalY / width) % items.length);
      const firstVisIdx = vy < 0 ? items.length - visible - 1 : 1;
      set((i) => {
        const position = getPos(i, firstVis, firstVisIdx);
        const prevPosition = getPos(i, prev.current[0], prev.current[1]);
        let rank =
          firstVis -
          (finalY < 0 ? items.length : 0) +
          position -
          firstVisIdx +
          (finalY < 0 && firstVis === 0 ? items.length : 0);
        return {
          // x is the position of each of our slides
          x:
            (-finalY % (width * items.length)) +
            width * rank +
            (down ? xMove : 0) +
            offset,
          // this defines if the movement is immediate
          // So when an item is moved from one end to the other we don't
          // see it moving
          immediate: vy < 0 ? prevPosition > position : prevPosition < position,
        };
      });
      prev.current = [firstVis, firstVisIdx];
    },
    [
      idx,
      getPos,
      width,
      visible,
      set,
      items.length,
      offset,
      sensitivity,
      setActive,
    ]
  );

  const bind = useGesture({
    onDrag: ({
      offset: [x],
      vxvy: [vx],
      down,
      direction: [xDir],
      cancel,
      distance,
      movement: [xMove],
    }) => {
      vx && runSprings(-x, -vx, down, xDir, cancel, distance, xMove);
    },
  });

  return (
    <div {...bind()} style={{ ...style, ...styles.container, width }}>
      {springs.map(({ x }, i) => (
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
