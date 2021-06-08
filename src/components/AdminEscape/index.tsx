import React from "react";
import styled, { css } from "styled-components";
import OutingBackground from "assets/background/OutingBackground.png";
import usePagination from "hooks/usePagination";
import { Arrow, Search } from "assets";
import { Link } from "react-router-dom";

interface EscapeApplyItemType {
  classnum: number;
  name: string;
  escapeTime: string;
  region: string;
  status: string;
}
interface AdminEscapeDummyData {
  EscapeApplyList: EscapeApplyItemType[];
}

const EscapeApplyItem: React.FC<EscapeApplyItemType> = ({ classnum, name, escapeTime, region, status }) => {
  return (
    <S.EscapeApplyItem>
      <span>{classnum}</span>
      <span>{name}</span>
      <span>{escapeTime}</span>
      <span>{region}</span>
      <S.EscapeApplyBtnWrapper>
        <S.EscapeApplyBtn background={"#ECEFFC"} color={"#8DADFF"} borderColor={"#A0B7E6"}>
          수락
        </S.EscapeApplyBtn>
        <S.EscapeApplyBtn background={"#FCECEC"} color={"#FFA6A1"} borderColor={"#E6A0A0"}>
          거절
        </S.EscapeApplyBtn>
      </S.EscapeApplyBtnWrapper>
    </S.EscapeApplyItem>
  );
};

const AdminEscape: React.FC<AdminEscapeDummyData> = ({ EscapeApplyList }) => {
  const { page, incresePage, decreasePage } = usePagination(Math.ceil(EscapeApplyList.length / 7));
  const startIndex = page + (page - 1) * 7;
  const endIndex = page + page * 7;
  return (
    <S.Positioner>
      <S.Background>
        <span>외출 대기 리스트</span>
      </S.Background>
      <S.TopWrapper>
        <S.SearchWrapper>
          <Search />
          <input type="text" placeholder="검색" />
        </S.SearchWrapper>
        <S.EscapeListLinkButton>
          <Link to="/Home">전체현황보기</Link>
          <Arrow />
        </S.EscapeListLinkButton>
      </S.TopWrapper>
      <S.EscapeApplyListWrapper>
        <S.PaginationWrapper>
          <span onClick={decreasePage}>{"<"}</span>
          <strong>{page}</strong>
          <span onClick={incresePage}>{">"}</span>
        </S.PaginationWrapper>
        <S.PageTitleWrapper>
          <span>학번</span>
          <span>이름</span>
          <span>외출시간</span>
          <span>신청사유</span>
          <span>상태</span>
        </S.PageTitleWrapper>
        <S.EscapeApplyListContainer>
          {EscapeApplyList.slice(startIndex, endIndex).map(item => (
            <EscapeApplyItem {...item} />
          ))}
        </S.EscapeApplyListContainer>
      </S.EscapeApplyListWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
  `,
  Background: styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${OutingBackground});
    span {
      font-weight: 600;
      font-size: 40px;
      line-height: 46px;
      letter-spacing: -0.05em;

      color: #ffffff;

      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-bottom: 3px solid #ffffff;
    }
  `,
  TopWrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 10vh;
    margin-bottom: 6vh;
  `,
  SearchWrapper: styled.div`
    width: 25%;
    border: 2px solid #003464;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    padding: 10px;
    input {
      margin: 2px;
      width: 100%;
      border: none;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;

      color: black;
    }
  `,
  EscapeListLinkButton: styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin-top: 5vh;
    border: 2px solid #003464;
    box-sizing: border-box;
    border-radius: 510px;
    padding: 5px 20px;
    cursor: pointer;
    & > :first-child {
      align-self: center;
      text-decoration: none;
      background: none;
      border: none;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #000000;
    }
  `,
  PaginationWrapper: styled.div`
    height: 0.5vh;
    width: 70%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 10px;
    strong {
      font-weight: bold;
      font-size: 25px;
      line-height: 29px;
      margin: 0 8px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #000000;
    }
    span {
      font-weight: 300;
      font-size: 25px;
      line-height: 29px;
      margin: 0 8px;
      text-align: center;
      letter-spacing: -0.05em;
      cursor: pointer;
      color: #000000;
    }
  `,
  EscapeApplyListWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  PageTitleWrapper: styled.div`
    width: 70%;
    border-top: 5px solid #353a63;
    border-bottom: 2px solid #353a63;
    display: flex;
    align-items: center;
    padding: 2vh 0;
    span {
      flex: 1;
      font-weight: 300;
      font-size: 25px;
      line-height: 29px;

      text-align: center;
      letter-spacing: -0.05em;

      color: #000000;
    }
  `,
  EscapeApplyListContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  EscapeApplyItem: styled.div`
    width: 70%;
    display: flex;
    padding: 2vh 0;
    border-bottom: 1.5px solid #c7c7c7;
    align-items: center;
    & > * {
      flex: 1;
    }
    & > span:first-child {
      color: #5e7be0;
    }
    span {
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #000000;
    }
  `,
  EscapeApplyBtnWrapper: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  EscapeApplyBtn: styled.button<{ background: string; color?: string; borderColor?: string }>`
    background-color: ${props => props.background};
    border: ${props => (props.borderColor ? css`1px solid ${props.borderColor}` : `none`)};
    border-radius: 5px;
    padding: 1vh 1.5vw;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;

    text-align: center;
    letter-spacing: -0.05em;

    color: ${props => (props.color ? props.color : "#ffffff")};
  `,
};

export default AdminEscape;
