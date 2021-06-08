import React from "react";
import styled from "styled-components";
import room from "assets/svg/room.png";

type RoomData = {
  name: string;
  teacher: string;
  capacity: number;
  image: string;
  status: number;
};

interface MeetingRoomItemProps {
  RoomDummyData: RoomData[];
}

const MeetingRoomItem: React.FC<MeetingRoomItemProps> = ({ RoomDummyData }) => {
  return (
    <S.Positioner>
      <S.RoomWrapper>
        {RoomDummyData.map((data, idx) => (
          <S.RoomContent key={idx}>
            <img
              src={room}
              alt="방"
              style={{ marginTop: 15 }}
              width="85%"
              height="69%"
            />
            <S.RoomBottomWrapper>
              <S.RoomNameWrapper>
                {data.status === 1 ? (
                  <S.RoomName>
                    <S.BulletColumn color="#fe8787" />
                    <S.RoomTitle color="#fe8787">{data.name}</S.RoomTitle>
                  </S.RoomName>
                ) : (
                  <S.RoomName>
                    <S.BulletColumn color="#86a8dc" />
                    <S.RoomTitle color="#86a8dc">{data.name}</S.RoomTitle>
                  </S.RoomName>
                )}
                <S.TeacherText>
                  <span>{data.teacher}</span>
                </S.TeacherText>
              </S.RoomNameWrapper>
              <S.RoomTeam>1팀 / {data.capacity}팀</S.RoomTeam>
            </S.RoomBottomWrapper>
          </S.RoomContent>
        ))}
      </S.RoomWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `,
  RoomWrapper: styled.div`
    display: grid;
    width: 100%;
    height: 140%;
    grid-row-gap: 40px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 285px);
  `,
  RoomContent: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    background-color: #ffffff;
    box-shadow: 1px 1px 1px 2px rgba(204, 204, 204, 0.25);
    border-radius: 15px;
  `,
  RoomNameWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
  `,
  RoomName: styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    padding-left: 27px;
    justify-content: flex-start;
    align-items: center;
  `,
  RoomBottomWrapper: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `,
  BulletColumn: styled.div`
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background-color: ${(props) => props.color};
  `,
  TeacherText: styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    justify-content: flex-start;
    align-items: center;
    padding-left: 3.3rem;
    padding-bottom: 8px;

    span {
      font-size: 15px;
      color: #a3a3a3;
    }
  `,
  RoomTeam: styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    justify-content: center;
    align-items: center;

    div {
      font-size: 16px;
      font-weight: bold;
      color: #686868;
    }
  `,
  RoomTitle: styled.div`
    font-size: 22px;
    font-weight: bold;
    padding-top: 5px;
    padding-left: 8px;
    letter-spacing: -0.05em;
    color: ${(props) => props.color};
  `,
};

export default MeetingRoomItem;
