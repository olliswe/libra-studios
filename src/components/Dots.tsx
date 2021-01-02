import { a, useSpring } from "react-spring";
import styled from "styled-components";
import { items } from "helpers/items";
import useActiveStore from "hooks/useActiveStore";
import React from "react";
import { theme } from "helpers/theme";

const Navigation = styled.div`
  display: none;

  ${theme.media.phone} {
    position: absolute;
    bottom: 12%;
    width: 100%;
    z-index: 2;
    display: unset;
  }
`;

const DotsContainer = styled.div`
  padding: 0.7rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledDot = styled(a.div)`
  border-radius: 99px;
  background: ${({ theme }) => theme.colors.orange};
  width: 5px;
  height: 5px;
  margin: 0.3rem;
`;

const Dot = ({ active }: { active: boolean }) => {
  const { transform, opacity } = useSpring({
    opacity: active ? 1 : 0.8,
    transform: active ? `scale(1.5)` : `scale(1)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return <StyledDot style={{ opacity: opacity as any, transform }} />;
};

const Dots = () => {
  const active = useActiveStore((state) => state.active);

  return (
    <Navigation>
      <DotsContainer>
        {items.map((item, index) => (
          <Dot key={index} active={active === index} />
        ))}
      </DotsContainer>
    </Navigation>
  );
};

export default Dots;
