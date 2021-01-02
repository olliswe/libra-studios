import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useActiveStore from "hooks/useActiveStore";
import { items } from "helpers/items";
import PlayButton from "components/elements/PlayButton";
import PauseButton from "components/elements/PauseButton";
import { useHistory } from "react-router";
import Logo from "assets/images/logov2.png";
import MusicSlider from "components/MusicSlider";
import { theme } from "helpers/theme";

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

  ${theme.media.phone} {
    top: 2%;
  }
`;

const Wrapper = styled.div<{ show: boolean }>`
  height: 100%;
  display: flex;
  align-items: flex-end;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  flex-direction: column;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  cursor: pointer;
  display: inline-flex;
`;

const Img = styled.img`
  height: 70px;
  ${theme.media.phone} {
    height: 45px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CurrentSong = styled.span<{ isActive: boolean }>`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  color: ${({ theme }) => theme.colors.orange};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  text-transform: uppercase;
  margin-left: 1rem;
  cursor: pointer;
`;

const Navbar = ({ playerRef }: { playerRef: any }) => {
  const currentSong = useActiveStore((state) => state.currentSong);
  const setCurrentSong = useActiveStore((state) => state.setCurrentSong);
  const [lastSong, setLastSong] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (currentSong !== null) {
      setLastSong(items[currentSong].label);
    }
  }, [currentSong]);

  const handlePause = () => setCurrentSong(null);
  const handleHome = () => history.push("/");

  return (
    <NavBar>
      <ImgWrapper onClick={handleHome}>
        <Img src={Logo} />
      </ImgWrapper>
      <Wrapper show={currentSong !== null}>
        <Row>
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
        </Row>
        <Row>
          <MusicSlider playerRef={playerRef} />
        </Row>
      </Wrapper>
    </NavBar>
  );
};

export default Navbar;
