import { FilterIcon, Search } from "assets";
import { MeetingRoomItem } from "components";
import React from "react";
import styled from "styled-components";

type RoomData = {
  name: string;
  teacher: string;
  capacity: number;
  image: string;
  status: number;
};

interface MeetingRoomProps {
  RoomDummyData: RoomData[];
}

const MeetingRoom: React.FC<MeetingRoomProps> = ({ RoomDummyData }) => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.ConferenceWrapper>
          <S.HeaderBox>
            <span>회의실 목록</span>
            <S.SearchBarWrapper>
              <FilterIcon />
              <S.SearchBar>
                <input placeholder="검색.." />
                <Search />
              </S.SearchBar>
            </S.SearchBarWrapper>
          </S.HeaderBox>
          <MeetingRoomItem RoomDummyData={RoomDummyData} />
        </S.ConferenceWrapper>
      </S.Wrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: auto;
  `,
  Wrapper: styled.div`
    display: flex;
    margin-top: 4rem;
    margin-bottom: 4rem;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  `,
  ConferenceWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 85%;
  `,
  HeaderBox: styled.div`
    display: flex;
    height: 70px;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;

    span {
      font-family: NanumBarunGothic;
      color: #9ccbf7;
      font-size: 30px;
      letter-spacing: -0.05em;
    }
  `,
  SearchBarWrapper: styled.div`
    display: flex;
    width: 450px;
    height: 70px;
    justify-content: flex-start;
    align-items: center;
  `,
  SearchBar: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 75%;
    height: 51px;
    background-color: white;
    box-shadow: 1px 1px 1px 2px rgba(204, 204, 204, 0.25);
    border-radius: 10px;
    margin-left: 12px;

    input {
      width: 81%;
      height: 40px;
      padding-left: 15px;
      border: 0;
    }
  `,
};

export default MeetingRoom;
