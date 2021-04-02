import React from "react";
import styled, { css } from "styled-components";

interface RoomWaitItemType {
  room_image?: string;
  name: string;
  teacher?: string;
  team?: string;
  periods: number[];
  reason?: string;
  status?: number;
}
interface RoomWaitList {
  WaitRoomDummyData: RoomWaitItemType[];
}

const WaitRoomItem: React.FC<RoomWaitItemType> = ({
  room_image,
  name,
  teacher,
  team,
  periods,
  reason,
  status,
}) => {
  return (
    <>
      <S.WaitRoomItem>
        <S.WaitRoomInfoWrapper>
          <img
            src={room_image}
            alt="room_img"
            width={56}
            height={56}
            style={{
              border: "3px solid #629AEE",
              borderRadius: "100%",
              marginLeft: "32px",
            }}
          />
          <div>
            <span>{name}</span>
            <span>{teacher}</span>
          </div>
        </S.WaitRoomInfoWrapper>
        <span>{team}</span>
        <span>{periods.toString()} 교시</span>
        <span>{reason}</span>
        <S.WaitRoomStatusWrapper status={status}>
          <span>{status === 3 ? "대기" : status === 2 ? "거절" : "수락"}</span>
        </S.WaitRoomStatusWrapper>
        <span>x</span>
      </S.WaitRoomItem>
    </>
  );
};

const MypageRoomWait: React.FC<RoomWaitList> = ({ WaitRoomDummyData }) => {
  return (
    <S.Positioner>
      <S.RoomWaitTitle>회의실 대여 대기 목록</S.RoomWaitTitle>
      <S.RoomWaitListWrapper>
        <S.RoomWaitListTitleWrapper>
          <span>실 이름</span>
          <span>빌린 팀</span>
          <span>빌린교시</span>
          <span>사유</span>
          <span>상태</span>
          <span />
        </S.RoomWaitListTitleWrapper>
        <S.WaitListWrapper>
          {WaitRoomDummyData.map((item) => (
            <WaitRoomItem {...item} />
          ))}
        </S.WaitListWrapper>
      </S.RoomWaitListWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    height: 497px;
    flex: 1;
    padding: 26px 0 0 81px;
    display: flex;
    flex: none;
    flex-direction: column;
  `,
  RoomWaitTitle: styled.span`
    font-size: 20px;
    font-weight: bold;
  `,
  RoomWaitListWrapper: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    background: #ffffff;
    box-shadow: 1px 1px 1px 2px rgba(204, 204, 204, 0.25);
    border-radius: 5px;
  `,
  RoomWaitListTitleWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    border-bottom: 1.5px solid #d4d4d4;
    padding: 24px 0px;
    span {
      flex: 1;
      font-weight: bold;
      font-size: 14px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #9b9b9b;
    }
    & > span:last-child {
      flex: 0.3;
    }
  `,
  WaitListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
  `,
  WaitRoomItem: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 22px 0px;
    & > * {
      flex: 1;
    }
    & > span:last-child {
      flex: 0.3;
    }
    & > span {
      color: #9a9797;
      font-size: 18px;
      font-weight: normal;
      text-align: center;
    }
    border-bottom: 1px solid #a9a9a9;
  `,
  WaitRoomInfoWrapper: styled.div`
    display: flex;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      & > span:first-child {
        font-weight: 600;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        letter-spacing: -0.05em;

        color: #629aee;
      }
      span {
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.05em;

        color: #c4c4c4;
      }
    }
  `,
  WaitRoomStatusWrapper: styled.div<{ status?: number }>`
    width: 99px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      padding: 16.5px 44.5px;
      border-radius: 50px;
      font-size: 18px;
      ${(props) =>
        props.status === 3
          ? css`
              background: #d6d6d6;
              color: #ffffff;
            `
          : props.status === 2
          ? css`
              background: #ffecf2;
              color: #ff96b6;
            `
          : css`
              background: #e5f8f4;
              color: #65d4ba;
            `};
      vertical-align: middle;
    }
    text-align: center;
  `,
};

export default MypageRoomWait;
