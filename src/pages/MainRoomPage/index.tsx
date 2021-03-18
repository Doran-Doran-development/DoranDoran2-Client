import { MainHeader } from "components";
import { MainRoomContainer } from "container";
import React from "react";
import styled from "styled-components";

const MainRoomPage: React.FC = () => {
  return (
    <Positioner>
      <MainHeader />
      <MainRoomContainer />
    </Positioner>
  );
};

const Positioner = styled.div`
  width: 100%;
  height: 100vh;
`;

export default MainRoomPage;
