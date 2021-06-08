import { Header } from "components";
import { MypageContainer } from "container";
import React from "react";
import styled from "styled-components";

const MyPage: React.FC = () => {
  return (
    <Positioner>
      <Header />
      <MypageContainer />
    </Positioner>
  );
};

const Positioner = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7f9fb;
`;
export default MyPage;
