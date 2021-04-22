import { Header } from "components";
import { RoomDetailContainer } from "container";
import React from "react";
import styled from "styled-components";

const RoomDetailPage: React.FC = () => {
  return (
    <S.Positioner>
      <Header />
      <RoomDetailContainer />
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
  `,
};

export default RoomDetailPage;
