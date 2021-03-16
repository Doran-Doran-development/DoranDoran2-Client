import React from "react";
import styled from "styled-components";
import { Main, MainHeader } from "components";
import background from "../../assets/background/back.png";

const MainPage: React.FC = () => {
  return (
    <Positioner>
      <Background>
        <MainHeader />
        <Main />
      </Background>
    </Positioner>
  );
};

const Positioner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export default MainPage;
