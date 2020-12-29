import React from "react";
import styled from "styled-components";
import HomeImg from "assets/images/home.jpg";
import { StyledH1 } from "components/Shared";
import { useHistory } from "react-router";
import MailIcon from "components/elements/MailIcon";

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

const Title = styled(StyledH1)`
  font-size: 34px;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  text-transform: uppercase;
  font-size: 16px;
  color: #ffe6cc;
  font-weight: 500;
`;

const StyledButton = styled.button`
  padding: 0.8rem 1.25rem;
  background: rgba(232, 93, 59, 0.77);
  outline: none;
  border: none;
  opacity: 0.7;
  cursor: pointer;
  margin: 1.2rem 0 1rem 0;
  border-radius: 2px;

  :hover {
    opacity: 1;
  }
`;

const Home = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Content>
        <Title>MAQUINA STUDIOS</Title>
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
