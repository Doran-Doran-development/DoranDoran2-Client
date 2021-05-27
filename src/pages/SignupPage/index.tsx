import { Signup } from "components";
import React from "react";
import styled from "styled-components";

const SignupPage: React.FC = () => {
  return (
    <S.Positioner>
      <Signup />
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

export default SignupPage;
