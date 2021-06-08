import { LoginContainer } from "container";
import React from "react";
import styled from "styled-components";

const LoginPage: React.FC = () => {
  return (
    <S.Positioner>
      <LoginContainer />
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
export default LoginPage;
