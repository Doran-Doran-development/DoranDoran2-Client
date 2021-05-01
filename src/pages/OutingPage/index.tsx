import React from "react";
import styled from "styled-components";
import { Header, Outing } from "../../components/index";

const OutingPage: React.FC = () => {
  return (
    <S.Positioner>
      <Header />
      <Outing />
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
  `,
};

export default OutingPage;
