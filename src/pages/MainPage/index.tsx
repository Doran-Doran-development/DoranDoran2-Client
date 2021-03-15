import React from "react";
import styled from "styled-components";
import { Main, MainHeader } from "components";
import background from "../../assets/background/back.png";

const MainPage: React.FC = () => {
  return (
    <Positioner>
      <MainHeader />
      <Main />
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

export default MainPage;
