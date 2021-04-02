import React from "react";
import styled from "styled-components";

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

const MypageRentalRoom: React.FC<RoomWaitList> = ({ WaitRoomDummyData }) => {
  return (
    <S.Positioner>
      <S.RentalRoomListTitle>최근 회의실 대여 목록</S.RentalRoomListTitle>
      <S.RentalRoomListWrapper>
        {WaitRoomDummyData.filter((item) => item.status === 1).map((item) => (
          <S.RentalRoomItem>
            <S.RoomItemNameText>{item.name}</S.RoomItemNameText>
            <S.RoomItemPeriodsText>
              {item.periods.toString()}교시
            </S.RoomItemPeriodsText>
          </S.RentalRoomItem>
        ))}
      </S.RentalRoomListWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 446px;
    height: 626px;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 45px 61px 0 46px;
  `,
  RentalRoomListTitle: styled.span`
    padding-bottom: 5px;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.05em;

    color: #000000;
  `,
  RentalRoomListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    background: #ffffff;
    box-shadow: 1px 1px 1px 2px rgba(204, 204, 204, 0.25);
    border-radius: 5px;
  `,
  RentalRoomItem: styled.div`
    width: 90%;
    padding: 35.5px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #9a9a9a;
  `,
  RoomItemNameText: styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.05em;

    color: #757373;
  `,
  RoomItemPeriodsText: styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.05em;

    color: #87a9fe;
  `,
};

export default MypageRentalRoom;
