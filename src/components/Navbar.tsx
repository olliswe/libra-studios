import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CurrentSong, StyledH1 } from "./Shared";
import useActiveStore from "hooks/useActiveStore";
import { items } from "helpers/items";
import PlayButton from "components/elements/PlayButton";
import PauseButton from "components/elements/PauseButton";

const NavBar = styled.div`
  height: 100px;
  width: 100%;
  padding: 0 5%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 2;
  justify-content: space-between;
`;

const Wrapper = styled.div<{ show: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const Navbar = () => {
  const currentSong = useActiveStore((state) => state.currentSong);
  const setCurrentSong = useActiveStore((state) => state.setCurrentSong);
  const [lastSong, setLastSong] = useState("");

  useEffect(() => {
    if (currentSong !== null) {
      setLastSong(items[currentSong].label);
    }
  }, [currentSong]);

  const handlePause = () => setCurrentSong(null);

  return (
    <NavBar>
      <StyledH1>MAQUINA STUDIOS</StyledH1>
      <Wrapper show={currentSong !== null}>
        <CurrentSong
          isActive={true}
          style={{ cursor: "auto", marginRight: "1rem" }}
        >
          {lastSong}
        </CurrentSong>
        {currentSong !== null ? (
          <PauseButton height={"2rem"} width={"2rem"} onClick={handlePause} />
        ) : (
          <PlayButton height={"2rem"} width={"2rem"} />
        )}
      </Wrapper>
    </NavBar>
  );
};

export default Navbar;
