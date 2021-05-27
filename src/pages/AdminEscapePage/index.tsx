import React from "react";
import styled from "styled-components";
import { AdminEscapeContainer } from "container";
import { Header } from "components";

const AdminEscapePage: React.FC = () => {
  return (
    <S.Positioner>
      <Header />
      <AdminEscapeContainer />
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
  `,
};

export default AdminEscapePage;
