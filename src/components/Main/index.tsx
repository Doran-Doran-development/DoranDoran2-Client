import { Arrow } from "assets";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.MainTitleWrapper>
          <span>
            회의실을 편하게 빌리고
            <br />
            관리하는 서비스
            <br />
            도란도란
          </span>
          <S.ContentButton to="/login">
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
    height: calc(100% - 160px);
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
  MainTitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
    height: 85%;
    padding-left: 7rem;

    span {
      color: white;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 60px;
      letter-spacing: -0.05em;
      font-weight: bold;
    }
  `,
  ContentButton: styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 358px;
    height: 85px;
    border: 3px solid #ffffff;
    border-radius: 50px;

    color: white;
    text-decoration: none;
    font-weight: 300;
    font-size: 30px;
    letter-spacing: -0.05em;
  `,
};

export default Main;
