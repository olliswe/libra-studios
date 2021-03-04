import React from "react";
import styled from "styled-components";
import useActiveStore from "hooks/useActiveStore";
import { items } from "helpers/items";
import { useHistory } from "react-router";
import Logo from "assets/images/logov2.png";
import { theme } from "helpers/theme";
import MusicPlayer from "components/MusicPlayer";

const NavBar = styled.div`
  width: 100%;
  padding: 0 5%;
  display: flex;
  position: absolute;
  top: 10px;
  z-index: 2;
  flex-direction: column;

  ${theme.media.phone} {
    top: 2%;
  }
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

const CurrentSong = styled.span<{ isActive: boolean; show: boolean }>`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  color: ${({ theme }) => theme.colors.orange};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  text-transform: uppercase;
  margin-left: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlayerWrapper = styled.div<{ show: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: -10px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s ease-in-out;

  ${theme.media.phone} {
    margin-top: 10px;
  }
`;

interface INavbar {
  goToIndex: (input: number) => void;
}

const Navbar = ({ goToIndex }: INavbar) => {
  const currentSong = useActiveStore((state) => state.currentSong);
  const active = useActiveStore((state) => state.active);
  const history = useHistory();

  const handleHome = () => history.push("/");

  console.log(currentSong);

  return (
    <NavBar>
      <Row>
        <ImgWrapper onClick={handleHome}>
          <Img src={Logo} />
        </ImgWrapper>
        <CurrentSong
          isActive={true}
          style={{
            cursor: "auto",
          }}
          show={currentSong !== null}
        >
          {currentSong !== null
            ? items[currentSong].label
            : items[active].label}
        </CurrentSong>
      </Row>
      <PlayerWrapper show={currentSong !== null}>
        <MusicPlayer goToIndex={goToIndex} />
      </PlayerWrapper>
    </NavBar>
  );
};

export default Navbar;
