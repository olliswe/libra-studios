import React, { useState } from "react";
import styled from "styled-components";
import HomeImg from "assets/images/home.jpg";
import { useHistory } from "react-router";
import MailIcon, { EMAIL } from "components/elements/MailIcon";
import Logo from "assets/images/logov2.png";
import { theme } from "helpers/theme";
import Nick from "assets/images/nick.png";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: url(${HomeImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.45); // Tint color
  background-blend-mode: multiply;
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  text-transform: uppercase;
  font-size: 16px;
  color: #ffe6cc;
  font-weight: 500;
`;

const AboutLink = styled.span`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  text-transform: uppercase;
  font-size: 16px;
  color: #ffe6cc;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
`;

const StyledButton = styled.button`
  padding: 0.7rem 1.25rem;
  background: transparent;
  outline: none;
  opacity: 1;
  cursor: pointer;
  margin: 1.2rem 0 1rem 0;
  border: solid 2px ${({ theme }) => theme.colors.orange};

  :hover {
    background: rgba(255, 233, 204, 0.2);
  }
`;

const LogoImg = styled.img`
  height: 150px;
  margin-bottom: 0.5rem;
  ${theme.media.phone} {
    height: 100px;
  }
`;

const NickImg = styled.img`
  height: 40px;
  margin-bottom: 1rem;
  ${theme.media.phone} {
    height: 20px;
  }
`;

const AboutDesc = styled(Subtitle)`
  width: 600px;
  text-align: center;
  margin-bottom: 1rem;

  ${theme.media.phone} {
    max-width: 50%;
  }
`;

const MailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Home = () => {
  const history = useHistory();
  const [showAbout, setShowAbout] = useState(false);

  return (
    <Wrapper>
      <Content>
        {!showAbout ? (
          <>
            <LogoImg src={Logo} />

            <Subtitle>SCORES FOR THE SCREEN</Subtitle>
            <StyledButton onClick={() => history.push("/music")}>
              <Subtitle>ENTER</Subtitle>
            </StyledButton>
            <AboutLink onClick={() => setShowAbout(true)}>ABOUT</AboutLink>
          </>
        ) : (
          <>
            <AboutDesc>
              Maquina Studios creates scores for the screen. The studio was
              founded by composer Nick Malmestrom in Stockholm, Sweden.
            </AboutDesc>
            <AboutDesc>Bjurholmsgatan 3C, 116 38, Stockholm, Sweden</AboutDesc>
            <MailWrapper>
              <Subtitle>{EMAIL}</Subtitle>&nbsp;&nbsp; <MailIcon />
            </MailWrapper>
            <NickImg src={Nick} />
            <AboutLink onClick={() => setShowAbout(false)}>RETURN</AboutLink>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default Home;
