import React from "react";
import styled from "styled-components";
import HomeImg from "assets/images/home.jpg";
import { useHistory } from "react-router";
import MailIcon from "components/elements/MailIcon";
import Logo from "assets/images/logov2.png";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${HomeImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.3); // Tint color
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

const Img = styled.img`
  height: 150px;
  margin-bottom: 0.5rem;
`;

const Home = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Content>
        <Img src={Logo} />
        <Subtitle>SCORES FOR THE SCREEN</Subtitle>
        <StyledButton onClick={() => history.push("/music")}>
          <Subtitle>ENTER</Subtitle>
        </StyledButton>
        <MailIcon />
      </Content>
    </Wrapper>
  );
};

export default Home;
