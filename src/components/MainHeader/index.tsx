import React from "react";
import styled from "styled-components";
import { Logo } from "assets";

const MainHeader: React.FC = () => {
  return (
    <S.Positioner>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 160px;
    font-size: 20px;
  `,
  LogoWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 4rem;
  `,
};

export default MainHeader;
