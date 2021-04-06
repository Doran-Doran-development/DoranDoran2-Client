import React from "react";
import styled from "styled-components";
import OutingBackground from "../../assets/background/OutingBackground.png";

const Outing: React.FC = () => {
  return (
    <S.Positioner>
      <S.Background>
        <span>외출 신청하기</span>
      </S.Background>
      <S.OutingWrapper>
        <S.OutingTitle>
          <span>외출 신청하기</span>
        </S.OutingTitle>
        <S.OutingFormWrapper>
          <div>
            <span>학번</span>
            <input type="text" placeholder="학번을 입력하세요" />
          </div>
          <div>
            <span>외출시간</span>
            <input type="text" placeholder="외출시간을 입력하세요" />
          </div>
          <div>
            <span>이름</span>
            <input type="text" placeholder="이름을 입력하세요" />
          </div>
          <div>
            <span>도착시간</span>
            <input type="text" placeholder="도착시간을 입력하세요" />
          </div>
          <div>
            <span>사유</span>
            <input type="text" placeholder="사유을 입력하세요" />
          </div>
        </S.OutingFormWrapper>
        <S.OutingButton>외출 신청하기</S.OutingButton>
      </S.OutingWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Background: styled.div`
    width: 100%;
    height: 35%;
    background: url(${OutingBackground});
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    span {
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
  OutingWrapper: styled.div`
    width: 70%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 83px;
  `,
  OutingTitle: styled.div`
    border-bottom: 3px solid #003464;
    span {
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #003464;
    }
  `,
  OutingFormWrapper: styled.div`
    height: fit-content;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 33% 33% 33%;
    grid-auto-flow: row;
    div:last-child {
      grid-column: span 2;
      input {
        flex: 1;
      }
    }
    div {
      flex: 1;
      display: flex;
      align-items: center;
      margin: 20px;
      span {
        font-weight: 300;
        font-size: 25px;
        line-height: 29px;

        text-align: center;
        letter-spacing: -0.05em;

        color: #000000;
      }
      input {
        flex: 1;
        padding: 18px;
        margin-left: 20px;
        border: 2px solid #c3c3c3;
        border-radius: 10px;
        font-size: 20px;
      }
      input::placeholder {
        font-weight: 900;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: -0.05em;

        color: #c3c3c3;
      }
    }
  `,
  OutingButton: styled.button`
    align-self: flex-end;
    background-color: rgba(0, 0, 0, 0);
    padding: 14px 35px;
    border: 2px solid #003464;
    box-sizing: border-box;
    border-radius: 5px;

    font-weight: 300;
    font-size: 20px;
    line-height: 23px;

    text-align: center;
    letter-spacing: -0.05em;

    color: #000000;
  `,
};

export default Outing;
