import { Arrow } from "assets";
import React from "react";
import styled from "styled-components";
import RentalRoomBackground from "assets/background/RoomDetailBackground.png";
import { ModalPortal, RentalModal } from "components";
import useModal from "hooks/useModal";
import useFocusContent from "hooks/useFocusContent";
interface SelectStatusTitleType {
  text: string;
  background: string;
  border: string;
}
interface RentalTeamType {
  teamName: string;
  teamPeople: TeamPeopleItemType[];
}
interface TeamPeopleItemType {
  name: string;
  email: string;
}
interface RentalRoomDummyData {
  SelectTitleArray: SelectStatusTitleType[];
  ClasstimeItem: number[];
  TeamPeopleListDummyData: TeamPeopleItemType[];
  RecentWordListDummyData: TeamPeopleItemType[];
  Teams: RentalTeamType[];
}

const RentalRoom: React.FC<RentalRoomDummyData> = ({ SelectTitleArray, ClasstimeItem, TeamPeopleListDummyData, RecentWordListDummyData, Teams }) => {
  const { isShow, toggleModal } = useModal();
  const { isFocus, toggleFocusContent } = useFocusContent();
  return (
    <S.Positioner>
      <S.Background>
        <span>회의실 예약</span>
      </S.Background>
      <S.Wrapper>
        <S.RentalRoomFormWrapper>
          <span>회의실 신청하기</span>
          <S.RentalRoomFormNameAndTeam>
            <div>
              <span>이름</span>
              <input type="text" placeholder="이름을 입력하세요" />
            </div>
            <div>
              <span>대여 팀</span>
              <S.RentalRoomFormRecentTeamListWrapper onFocus={toggleFocusContent} onBlur={toggleFocusContent}>
                <input type="text" placeholder="대여할 팀을 입력하세요" />
                {isFocus ? (
                  <S.RecentTeamList>
                    {Teams.map(({ teamName }) => (
                      <>
                        <S.RecentTeamItem>
                          <span>{teamName}</span>
                        </S.RecentTeamItem>
                        <S.RecentTeamItemPeopleList>
                          <span>ㅁㄴㅇ</span>
                          <span>awe</span>
                          <span>asdasfg</span>
                        </S.RecentTeamItemPeopleList>
                      </>
                    ))}
                    <S.RecentTeamItem onMouseDown={toggleModal}>
                      <span>팀 생성하기</span>
                    </S.RecentTeamItem>
                  </S.RecentTeamList>
                ) : null}
              </S.RentalRoomFormRecentTeamListWrapper>
            </div>
          </S.RentalRoomFormNameAndTeam>
          <S.RentalRoomFormRegion>
            <span>사유</span>
            <input type="text" placeholder="사유를 입력하세요" />
          </S.RentalRoomFormRegion>
          <S.RentalTimeSelectWrapper>
            <S.RentalSelectTitleWrapper>
              <span>예약 시간 선택</span>
              <S.RentalSelectTitle>
                {SelectTitleArray.map(({ text, background, border }) => (
                  <>
                    <S.RentalSelectTitleItem background={background} border={border} />
                    <span>{text}</span>
                  </>
                ))}
              </S.RentalSelectTitle>
            </S.RentalSelectTitleWrapper>
            <S.RentalClasstimeSelectWrapper>
              <S.RentalClasstimeListWrapper>
                {ClasstimeItem.map((item, index) => (
                  <S.RentalClasstimeItem background={SelectTitleArray[item].background} border={SelectTitleArray[item].border}>
                    {index + 1}
                  </S.RentalClasstimeItem>
                ))}
              </S.RentalClasstimeListWrapper>
              <S.RentalBtn>
                <button>예약하기</button>
                <Arrow />
              </S.RentalBtn>
            </S.RentalClasstimeSelectWrapper>
          </S.RentalTimeSelectWrapper>
        </S.RentalRoomFormWrapper>
      </S.Wrapper>
      <ModalPortal isShow={isShow}>
        <RentalModal toggleModal={toggleModal} TeamPeopleListDummyData={TeamPeopleListDummyData} RecentWordListDummyData={RecentWordListDummyData} />
      </ModalPortal>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
  `,
  Wrapper: styled.div`
    width: 75%;
    height: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `,
  Background: styled.div`
    width: 100%;
    height: 30%;
    background: url(${RentalRoomBackground});
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

      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-bottom: 3px solid #ffffff;
    }
  `,
  RentalRoomFormWrapper: styled.div`
    display: flex;
    flex-direction: column;
    & > span {
      width: 100%;
      margin: 10vh 0 6vh 0;
      border-bottom: 3px solid #003464;
      font-weight: 300;
      font-size: 22px;
      line-height: 25px;
      letter-spacing: -0.05em;
      color: #003464;
    }
  `,
  RentalRoomFormNameAndTeam: styled.div`
    display: flex;
    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      span {
        flex: 0.15;
        font-weight: 600;
        font-size: 25px;
        line-height: 29px;
        text-align: center;

        letter-spacing: -0.05em;

        color: #000000;
      }
      & > input {
        flex: 0.85;
        border: 2px solid #c3c3c3;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0);
        font-size: 25px;
        padding: 14px;
        margin: 5px;
      }
    }
  `,
  RentalRoomFormRecentTeamListWrapper: styled.div`
    flex: 0.85;
    position: relative;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0);
    font-size: 25px;
    margin: 5px;
    & > input {
      width: calc(100% - 28px);
      border: 2px solid #c3c3c3;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0);
      padding: 14px;
    }
  `,
  RecentTeamList: styled.div`
    width: 100%;
    position: absolute;
    z-index: 1;
    border-radius: 10px;
    border: 2px solid #c3c3c3;
    background-color: white;
    overflow: auto;
    max-height: 30vh;
  `,
  RecentTeamItem: styled.div`
    padding: 15px 0;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    span {
      padding-left: 5px;
    }
    &:hover {
      background-color: #86a8dc;
      & > span {
        color: white;
      }
    }
  `,
  RecentTeamItemPeopleList: styled.div`
    width: 80%;
    position: absolute;
    margin-left: 10vw;
    z-index: 2;
    background-color: #fff;
  `,
  RentalRoomFormRegion: styled.div`
    display: flex;
    align-items: center;
    margin-top: 2vh;
    span {
      flex: 0.074;
      font-weight: 600;
      font-size: 25px;
      line-height: 29px;
      text-align: center;

      letter-spacing: -0.05em;

      color: #000000;
    }
    input {
      flex: 0.926;
      border: 2px solid #c3c3c3;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0);
      font-size: 25px;
      padding: 14px;
      margin: 5px;
    }
  `,
  RentalBtn: styled.div`
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
  RentalTimeSelectWrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 2vh;
  `,
  RentalSelectTitleWrapper: styled.div`
    display: flex;
    & > span {
      font-weight: 600;
      font-size: 25px;
      line-height: 29px;
      letter-spacing: -0.05em;

      color: #000000;
    }
  `,
  RentalSelectTitle: styled.div`
    display: flex;
    margin-left: 5vw;
    span {
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: -0.05em;

      color: #000000;
    }
  `,
  RentalClasstimeListWrapper: styled.div`
    width: 55%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
  `,
  RentalSelectTitleItem: styled.div<{ background: string; border: string }>`
    width: 16px;
    height: 16px;
    border-radius: 3px;
    background-color: ${props => props.background};
    border: 2px solid ${props => props.border};
    margin: 0 11px;
  `,
  RentalClasstimeSelectWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  RentalClasstimeItem: styled.div<{ background: string; border: string }>`
    width: 66px;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    margin: 25px;
    cursor: pointer;
    color: ${props => (props.background === "#FFFFFF" ? "#86A8DC" : "white")};
    background-color: ${props => props.background};
    border: 2px solid ${props => props.border};
    border-radius: 3px;
  `,
};

export default RentalRoom;
