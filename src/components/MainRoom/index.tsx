import React from "react";
import styled from "styled-components";

const MainRoom: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.TitleWrapper>
          <span>
            회의실 대여 서비스{" "}
            <span style={{ fontWeight: 600, color: "#025F94" }}>도란도란</span>
            은
          </span>
          <span>
            <span
              style={{ fontWeight: 600, lineHeight: "90px", color: "#025F94" }}
            >
              프로젝트 및 대회
            </span>
            를 준비하는
            <span style={{ fontWeight: 600, color: "#025F94" }}>
              {" "}
              학생들을 위한 서비스{" "}
            </span>
            입니다.
          </span>
        </S.TitleWrapper>
        <S.RoomWrapper>
          <S.SlideWrapper>
            <div>
              <S.RoomContent></S.RoomContent>
              <S.RoomContent></S.RoomContent>
              <S.RoomContent></S.RoomContent>
              <S.RoomContent></S.RoomContent>
            </div>
          </S.SlideWrapper>
        </S.RoomWrapper>
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  TitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20%;
    align-items: center;
    justify-content: center;

    span {
      font-weight: 300;
      font-size: 54px;
      letter-spacing: -0.05em;
      color: #000000;
    }
  `,
  RoomWrapper: styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  SlideWrapper: styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;

    div {
      display: flex;
      width: 100%;
      height: 100%;
      list-style: none;
      transition: 1s;
    }
  `,
  RoomContent: styled.div`
    width: calc(100% / 4);
    height: 100%;
    list-style: none;

    &:nth-child(1) {
      background-color: #ffa;
    }
    &:nth-child(2) {
      background-color: #faa;
    }
    &:nth-child(3) {
      background-color: #afa;
    }
    &:nth-child(4) {
      background-color: #aaf;
    }
  `,
};

export default MainRoom;
