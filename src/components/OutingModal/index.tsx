import React from "react";
import styled from "styled-components";
interface ModalType {
  toggleModal: () => void;
}
const OutingModal: React.FC<ModalType> = ({ toggleModal }) => {
  return (
    <S.Positoner>
      <S.ModalWrapper>
        <S.TitleWrapper>
          <span>외출신청</span>
        </S.TitleWrapper>
        <S.InfoWrapper>
          <div>
            <span>이름</span> 신원준
          </div>
          <div>
            <span>학번</span> 3109 <br />
          </div>
          <div>
            <span>외출 시간</span> 16:00 PM ~ 17:30 PM <br />
          </div>
          <div>
            <span>사유</span> 병원 방문 및 진료 <br />
          </div>
        </S.InfoWrapper>
        <S.InfoCheckBtnWrapper>
          <span>신청하시겠습니까?</span>
          <S.CheckBtnWrapper>
            <button onClick={toggleModal}>확인</button>
            <button onClick={toggleModal}>취소</button>
          </S.CheckBtnWrapper>
        </S.InfoCheckBtnWrapper>
      </S.ModalWrapper>
    </S.Positoner>
  );
};

const S = {
  Positoner: styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  `,
  ModalWrapper: styled.div`
    width: 654px;
    height: 700px;
    z-index: 100;
    background: white;
    position: relative;
    border-radius: 3px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TitleWrapper: styled.div`
    width: 90%;
    height: 12%;
    padding-top: 20px;
    border-bottom: 2px solid black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-weight: 300;
      font-size: 40px;
      line-height: 46px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #000000;
    }
  `,
  InfoWrapper: styled.div`
    padding: 30px 0;
    width: 90%;
    height: 45%;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    span {
      font-weight: normal;
      font-size: 22px;
      line-height: 25px;
      letter-spacing: -0.05em;

      color: #000000;
    }
    font-weight: 300;
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -0.05em;

    color: #000000;
  `,
  InfoCheckBtnWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      padding: 30px;
      font-weight: 300;
      font-size: 33px;
      line-height: 38px;

      text-align: center;
      letter-spacing: -0.05em;

      color: #000000;
    }
  `,
  CheckBtnWrapper: styled.div`
    button {
      padding: 17px 74px;
      margin: 13px;
      border: 2px solid #000000;
      box-sizing: border-box;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0);

      font-weight: 300;
      font-size: 25px;
      line-height: 29px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #000000;
    }
  `,
};
export default OutingModal;
