import React from "react";
import styled from "styled-components";
import { Arrow } from "assets";

const MainOuting: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.MainTitleWrapper>
          <span>
            비대면으로 외출신청하고
            <br />
            편하게 관리하는 서비스
            <br />
            도란도란
          </span>
          <S.ContentButton>
            <div style={{ padding: 20 }}>서비스 이용하기</div>
            <Arrow />
          </S.ContentButton>
        </S.MainTitleWrapper>
      </S.Wrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100%;
  `,
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `,
  MainTitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;

    span {
      text-align: right;
      color: white;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 60px;
      letter-spacing: -0.05em;
      font-weight: bold;
    }
  `,
  ContentButton: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 358px;
    height: 85px;
    border: 3px solid #ffffff;
    border-radius: 50px;

    color: white;
    font-weight: 300;
    font-size: 30px;
    letter-spacing: -0.05em;
  `,
};

export default MainOuting;
