import React from "react";
import MypageUserInfo from "../MypageUserInfo";
import MypageRoomWait from "../MypageRoomWait";
import MypageRentalRoom from "../MypageRentalRoom";
import styled from "styled-components";
import Background from "../../assets/background/MypageBackground.png";

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

const Mypage: React.FC<RoomWaitList> = ({ WaitRoomDummyData }) => {
  return (
    <S.Positioner>
      <S.BackgroundWrapper>
        <span>마이페이지</span>
      </S.BackgroundWrapper>
      <S.ContentWrapper>
        <div>
          <MypageUserInfo />
          <MypageRoomWait WaitRoomDummyData={WaitRoomDummyData} />
        </div>
        <MypageRentalRoom WaitRoomDummyData={WaitRoomDummyData} />
      </S.ContentWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: calc(100% - 90px);
    display: flex;
    flex-direction: column;
  `,
  BackgroundWrapper: styled.div`
    width: 100%;
    height: 270px;
    background-image: url(${Background});
    background-repeat: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      padding: 5px;
      font-size: 40px;
      font-weight: bold;
      color: white;
      border-bottom: 5px solid white;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  `,
  ContentWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    & > div:first-child {
      flex: 0.75;
      margin: 15px;
    }
    & > div:last-child {
      flex: 0.25;
    }
  `,
};

export default Mypage;
