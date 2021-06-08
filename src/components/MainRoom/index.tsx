import React from "react";
import styled from "styled-components";

type RoomData = {
  name: string;
  room_image: string;
  max_team: number;
  status: number;
};

interface MainRoomProps {
  RoomDummyData: RoomData[];
}

const MainRoom: React.FC<MainRoomProps> = ({ RoomDummyData }) => {
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
            <S.RoomContent>
              {RoomDummyData.map((data, idx) => (
                <>
                  <S.Room>
                    <img src={data.room_image} alt={data.name} />
                    <div>{data.name}</div>
                  </S.Room>
                </>
              ))}
            </S.RoomContent>
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
  `,
  RoomContent: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
  Room: styled.div`
    width: 350px;
    height: 350px;
    margin: 1rem;
    background-color: gray;

    img {
      position: relative;
      width: 350px;
      height: 350px;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      bottom: 52px;
      left: 0px;
      width: 100%;
      height: 50px;
      background-color: rgba(0, 0, 0, 0.42);
      color: #ffffff;
      letter-spacing: -0.05em;
      font-weight: 600;
    }
  `,
};

export default MainRoom;
