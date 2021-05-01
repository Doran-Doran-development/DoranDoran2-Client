import React from "react";
import styled from "styled-components";
import RoomDetailBackground from "assets/background/RoomDetailBackground.png";
import RoomDetailIcon from "assets/background/RoomDetailIcon.png";
import { Arrow } from "assets";

const RoomDetail: React.FC = () => {
  return (
    <S.Positioner>
      <S.Background>
        <span>회의실 세부정보</span>
        <S.RoomInfoTitleWrapper>
          <div id="image"></div>
          <div>
            <span>네트워크 실</span>
            <span>3층 본관</span>
          </div>
        </S.RoomInfoTitleWrapper>
      </S.Background>
      <S.RoomInfoWrapper>
        <S.RoomInfoTitle>회의실 안내</S.RoomInfoTitle>
        <S.RoomDetailInfoWrapper>
          <span>네트워크 실</span>
          <S.RoomDetailInfoListWrapper>
            <div />
            <S.RoomDetailInfoTableWrapper>
              <span>네트워크 실</span>
              <S.RoomDetailInfoTable>
                <div>
                  <span>수용인원</span> <p>2팀/6팀</p>
                </div>
                <div>
                  <span>회의실 위치</span> <p>3층 본관</p>
                </div>
                <div>
                  <span>담당 선생님</span> <p>봉만영 선생님</p>
                </div>
                <div>
                  <span>가능 시간</span> <p>1교시-10교시</p>
                </div>
              </S.RoomDetailInfoTable>
              <S.RoomRentalBtn>
                <button>예약하기</button>
                <Arrow />
              </S.RoomRentalBtn>
            </S.RoomDetailInfoTableWrapper>
          </S.RoomDetailInfoListWrapper>
        </S.RoomDetailInfoWrapper>
        <S.RoomDetailWrapper>
          <S.RoomInfoTitle>회의실 세부정보</S.RoomInfoTitle>
          <S.RoomDetailArticle>
            편의시설 구비 : 회의를 세부적으로 할 수 있는 칠판과 보드마카 구비,
            넓은 책상과 등받이 의자 및 칸막이, 콘센트구비
          </S.RoomDetailArticle>
        </S.RoomDetailWrapper>
        <S.RoomDetailWrapper>
          <S.RoomInfoTitle>회의실 규칙</S.RoomInfoTitle>
          <S.RoomDetailArticle>
            1. 모든 회의 및 사용이 종료시 콘센트 정리 및 칠판 정리하기. <br />
            2. 옆 회의실이나 반이 방해되지 않도록 조용히 하기. <br />
            3. 각 회의실에는 회의가능 팀에 소속된 인원을 제외한 다른 인원
            출입금지.
            <br />
          </S.RoomDetailArticle>
        </S.RoomDetailWrapper>
      </S.RoomInfoWrapper>
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
    background: url(${RoomDetailBackground});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > span {
      font-weight: 600;
      font-size: 40px;
      line-height: 46px;
      letter-spacing: -0.05em;

      color: #ffffff;

      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 4px 4px rgba(0, 0, 0, 0.25);
      border-bottom: 3px solid #ffffff;
    }
  `,
  RoomInfoTitleWrapper: styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > div#image {
      width: 89px;
      height: 89px;
      background: url(${RoomDetailIcon});
      margin: 5px;
      border-radius: 100%;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      span:first-child {
        font-weight: 600;
        font-size: 35px;
        line-height: 40px;
        letter-spacing: -0.05em;

        color: #ffffff;
      }
      span {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 23px;

        letter-spacing: -0.05em;

        color: #bbbbbb;
      }
    }
  `,
  RoomInfoWrapper: styled.div`
    width: 70%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-self: center;
  `,
  RoomInfoTitle: styled.span`
    margin: 76px 0;
    width: fit-content;
    padding-bottom: 1px;
    border-bottom: 1px solid #000000;
    font-weight: 300;
    font-size: 15px;
    line-height: 17px;
    letter-spacing: -0.05em;

    color: #000000;
  `,
  RoomDetailInfoWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    padding-top: 25px;
    border-top: 6px solid #003464;
    & > span {
      padding-bottom: 1px;
      border-bottom: 3px solid #003464;
      width: 100%;
      font-weight: 600;
      font-size: 20px;
      line-height: 23px;
      letter-spacing: -0.05em;

      color: #000000;
    }
  `,
  RoomDetailInfoListWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    & > div:first-child {
      flex: 1;
      padding-bottom: 35vh;
      margin: 2vh 5vw 10vh 0;
      border: 2px solid black;
    }
  `,
  RoomDetailInfoTableWrapper: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    & > span {
      width: 100%;
      font-weight: 600;
      font-size: 30px;
      line-height: 34px;
      letter-spacing: -0.05em;
      border-bottom: 3px solid #003464;
      color: #000000;
    }
  `,
  RoomDetailInfoTable: styled.div`
    display: flex;
    flex-direction: column;
    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid #003464;
      span {
        flex: 0.2;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        letter-spacing: -0.05em;

        color: #9d9d9d;
      }
      p {
        flex: 0.8;
      }
    }
  `,
  RoomRentalBtn: styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin-top: 5vh;
    border: 2px solid #003464;
    box-sizing: border-box;
    border-radius: 510px;
    padding: 5px 20px;
    button {
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
  RoomDetailWrapper: styled.div`
    margin: 10vh 0;
  `,
  RoomDetailArticle: styled.div`
    margin-top: 4vh;
  `,
};

export default RoomDetail;
