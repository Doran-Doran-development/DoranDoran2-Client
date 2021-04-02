import React from "react";
import styled from "styled-components";

const MypageUserInfo: React.FC = () => {
  return (
    <S.Positioner>
      <S.InfoTitleText>내 정보</S.InfoTitleText>
      <S.InfoWrapper>
        <S.InfoNameText>3109 신원준</S.InfoNameText>
        <S.InfoEmailText>s19010@gsm.hs.kr</S.InfoEmailText>
        <S.InfoCurrnetStatusWrapper>
          <S.CurrentStatusCircle />
          <S.CurrentStatusText>외출 중</S.CurrentStatusText>
        </S.InfoCurrnetStatusWrapper>
      </S.InfoWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 34px 0 0 81px;
  `,
  InfoTitleText: styled.span`
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 5px;
  `,
  InfoWrapper: styled.div`
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    box-shadow: 1px 1px 1px 2px rgba(204, 204, 204, 0.25);
    border-radius: 5px;
  `,
  InfoNameText: styled.span`
    flex: 0.1;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: right;
  `,
  InfoEmailText: styled.span`
    flex: 0.75;
    color: #bbbbbb;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    margin-top: 4px;
  `,
  InfoCurrnetStatusWrapper: styled.div`
    flex: 0.15;
    display: flex;
    justify-content: center;
  `,
  CurrentStatusCircle: styled.div`
    width: 23px;
    height: 23px;
    background: #fe8787;
    border-radius: 100%;
    margin-right: 15px;
  `,
  CurrentStatusText: styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.05em;

    color: #fe8787;
  `,
};

export default MypageUserInfo;
