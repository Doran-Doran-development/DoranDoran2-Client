import { FilterIcon, Search } from "assets";
import React from "react";
import styled from "styled-components";

const MeetingRoom: React.FC = () => {
  return (
    <S.Positioner>
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
      </S.ConferenceWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    display: flex;
    width: 100%;
    height: calc(100% - 90px);
    justify-content: center;
    align-items: center;
  `,
  ConferenceWrapper: styled.div`
    display: flex;
    width: 85%;
    height: 85%;
  `,
  HeaderBox: styled.div`
    display: flex;
    flex: 1;
    height: 70px;
    justify-content: space-between;
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
