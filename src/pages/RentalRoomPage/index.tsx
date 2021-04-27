import { Header } from "components";
import { RentalRoomContainer } from "container";
import React from "react";
import styled from "styled-components";

const RentalRoomPage: React.FC = () => {
  return (
    <S.Positioner>
      <Header />
      <RentalRoomContainer />
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
  `,
};
export default RentalRoomPage;
