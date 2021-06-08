import { Footer, Header } from "components";
import { MeetingRoomContainer } from "container";
import React from "react";
import styled from "styled-components";

const MeetingRoomPage: React.FC = () => {
  return (
    <>
      <S.Positioner>
        <Header />
        <MeetingRoomContainer />
        <Footer />
      </S.Positioner>
    </>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    background-color: #f7f9fb;
  `,
};

export default MeetingRoomPage;
