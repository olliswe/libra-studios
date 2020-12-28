import { MutableRefObject, useCallback } from "react";
import { useSprings } from "react-spring";
import { useDrag } from "react-use-gesture";
import debounce from "lodash-es/debounce";
import useActiveStore from "hooks/useActiveStore";

interface ISliderLogic {
  itemWidth: number | "full";
  index: MutableRefObject<number>;
  prev: MutableRefObject<number[]>;
  visible?: number;
  items: any[];
}

const useSliderLogic = ({
  itemWidth,
  items,
  index,
  prev,
  visible = items.length - 2,
}: ISliderLogic) => {
  const setActive = useActiveStore((state) => state.setActive);
  const active = useActiveStore((state) => state.active);

  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let width = itemWidth === "full" ? windowWidth : Math.ceil(itemWidth);
  const idx = useCallback((x, l = items.length) => (x < 0 ? x + l : x) % l, [
    items,
  ]);
  const getPos = useCallback(
    (i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx),
    [idx]
  );
  // Important only if specifyng width, centers the element in the slider
  const offset = 0;
  const [springs, set] = useSprings(items.length, (i) => ({
    x: (i < items.length - 1 ? i : -1) * width + offset,
  }));
  const runSprings = useCallback(
    (y, vy, down, xDir, cancel, xMove) => {
      // This decides if we move over to the next slide or back to the initial
      if (!down) {
        index.current +=
          ((-xMove + (width + xMove)) / width) * (xDir > 0 ? -1 : 1);
        // cancel()
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
    [idx, getPos, width, visible, set, items.length, index, prev, setActive]
  );

  const bind = useDrag(
    ({
      offset: [x],
      vxvy: [vx],
      down,
      direction: [xDir],
      cancel,
      movement: [xMove],
    }) => {
      vx && runSprings(-x, -vx, down, xDir, cancel, xMove);
    }
  );

  const buttons = (next: number) => {
    index.current += next;
    runSprings(0, next, true, -0, () => {}, -0);
  };

  const debounceTransition = debounce(buttons, 10);

  const goToIndex = useCallback(
    (index) => {
      if (
        index - active === -3 ||
        index - active === -2 ||
        index - active === -1
      ) {
        debounceTransition(index - active);
        return;
      }

      if (index < active) {
        debounceTransition(index + (items.length - active));
        return;
      }
      debounceTransition(index - active);
    },
    [active, debounceTransition, items.length]
  );

  return { bind, debounceTransition, springs, width, goToIndex };
};

export default useSliderLogic;
