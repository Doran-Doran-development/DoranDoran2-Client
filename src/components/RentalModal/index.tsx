import { Arrow, CloseBtn } from "assets";
import React from "react";
import styled from "styled-components";

interface RentalModalType {
  toggleModal: () => void;
}

interface TeamPeopleItemType {
  name: string;
  email: string;
}

interface RentalModalPropsType extends RentalModalType {
  TeamPeopleListDummyData: TeamPeopleItemType[];
}

const RentalModal: React.FC<RentalModalPropsType> = ({
  toggleModal,
  TeamPeopleListDummyData,
}) => {
  return (
    <S.Positioner>
      <S.RentalModalWrapper>
        <S.RentalModalHeaderWrapper>
          <span>팀 생성하기</span>
          <S.HeaderCloseBtn onClick={toggleModal}>
            <CloseBtn width={31} height={31} />
          </S.HeaderCloseBtn>
        </S.RentalModalHeaderWrapper>
        <S.TeamCreateFormWrapper>
          <S.TeamInputForm>
            <div>
              <span>팀 이름</span>
              <input type="text" placeholder="팀 이름을 입력하세요" />
            </div>
            <div>
              <span>담당 교사</span>
              <input type="text" placeholder="담당교사를 입력하세요" />
            </div>
          </S.TeamInputForm>
          <S.TeamPeopleForm>
            <S.TeamPeopleInput>
              <span>팀원</span>
              <input
                type="text"
                placeholder="추가할 팀원의 이메일을 입력하세요"
              />
            </S.TeamPeopleInput>
            <S.TeamPeopleListWrapper>
              <span>팀원 목록</span>
              <S.TeamPeopleList>
                {TeamPeopleListDummyData.map(({ name, email }) => (
                  <>
                    <S.TeamPeopleItem>
                      <span>{name}</span>
                      <p>{email}</p>
                      <CloseBtn width={9} height={9} />
                    </S.TeamPeopleItem>
                  </>
                ))}
              </S.TeamPeopleList>
            </S.TeamPeopleListWrapper>
          </S.TeamPeopleForm>
          <S.CreateTeamBtn>
            <button onClick={toggleModal}>생성하기</button>
            <Arrow />
          </S.CreateTeamBtn>
        </S.TeamCreateFormWrapper>
      </S.RentalModalWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
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
  RentalModalWrapper: styled.div`
    width: 45%;
    height: 75%;
    z-index: 100;
    background: white;
    position: relative;
    border-radius: 3px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  RentalModalHeaderWrapper: styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    span {
      font-weight: 300;
      font-size: 40px;
      line-height: 46px;
      text-align: center;
      letter-spacing: -0.05em;
      border-bottom: 1px solid #000000;
      color: #000000;
      margin: 2vh 0 0 2vw;
    }
  `,
  HeaderCloseBtn: styled.div`
    cursor: pointer;
  `,
  TeamCreateFormWrapper: styled.div`
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
  `,
  TeamInputForm: styled.div`
    height: 10%;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-between;
    div {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span {
        font-weight: 600;
        font-size: 25px;
        line-height: 29px;
        letter-spacing: -0.05em;
        margin: 10px 0;
        color: #000000;
      }
      input {
        padding: 15px 5px;
        font-size: 18px;
        border: 2px solid #c3c3c3;
        box-sizing: border-box;
        border-radius: 10px;
      }
    }
  `,
  TeamPeopleForm: styled.div`
    height: 70%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  `,
  TeamPeopleInput: styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    span {
      font-weight: 600;
      font-size: 25px;
      line-height: 29px;
      letter-spacing: -0.05em;
      margin: 10px 0;
      color: #000000;
    }
    input {
      padding: 15px 5px;
      font-size: 18px;
      border: 2px solid #c3c3c3;
      box-sizing: border-box;
      border-radius: 10px;
    }
  `,
  TeamPeopleListWrapper: styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    span {
      font-weight: 600;
      font-size: 25px;
      line-height: 29px;
      letter-spacing: -0.05em;
      margin: 10px 0;
      color: #000000;
    }
    & > div {
      flex: 1;
      border: 2px solid #d5d5d5;
      box-sizing: border-box;
      border-radius: 10px;
    }
  `,
  TeamPeopleList: styled.div`
    width: 100%;
    height: 100%;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TeamPeopleItem: styled.div`
    width: 95%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid gray;
    & > span {
      font-weight: 600;
      font-size: 15px;
      line-height: 17px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #000000;
    }
    & > p {
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #939393;
    }
  `,
  CreateTeamBtn: styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin-top: 5vh;
    border: 2px solid #003464;
    box-sizing: border-box;
    border-radius: 510px;
    padding: 5px 20px;
    button {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #000000;
    }
  `,
};

export default RentalModal;
