import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets";

const Header: React.FC = () => {
  return (
    <S.Positioner>
      <S.LogoWrapper>
        <Logo width={51} height={51} />
      </S.LogoWrapper>
      <S.ContentWrapper>
        <span>회의실 목록보기</span>
        <span>외출 신청하기</span>
        <span>마이페이지</span>
        <span>로그아웃</span>
      </S.ContentWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
  `,
  LogoWrapper: styled.div`
    display: flex;
    align-items: center;
    padding-left: 1rem;
    flex: 0.65;
  `,
  ContentWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0.35;
    padding-right: 10rem;
    span {
      font-size: 22px;
      font-weight: 400;
      color: #878787;
    }
    span:nth-child(4) {
      color: #788dda;
    }
  `,
};

export default Header;
