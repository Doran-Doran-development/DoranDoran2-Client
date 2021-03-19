import { MainRoom } from "components";
import React from "react";

const RoomDummyData = [
  {
    name: "1층 홈베이스",
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    max_team: 2,
    status: 0,
  },
  {
    name: "2층 홈베이스",
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    max_team: 3,
    status: 1,
  },
  {
    name: "3층 홈베이스",
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    max_team: 4,
    status: 0,
  },
  {
    name: "1층 프로그래밍실",
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    max_team: 5,
    status: 1,
  },
];

const MainRoomContainer: React.FC = () => {
  return <MainRoom RoomDummyData={RoomDummyData} />;
};

export default MainRoomContainer;
