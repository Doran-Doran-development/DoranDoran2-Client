import { Header } from "components";
import { HomeContainer } from "container";
import React from "react";
import styled from "styled-components";

const HomePage: React.FC = () => {
  return (
    <S.Positioner>
      <Header />
      <HomeContainer />
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f7f9fb;
  `,
};

export default HomePage;
