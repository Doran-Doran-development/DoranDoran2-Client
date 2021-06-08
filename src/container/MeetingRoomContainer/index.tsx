import { MeetingRoom } from "components";
import React from "react";

const RoomDummyData = [
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 0,
  },
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 1,
  },
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 0,
  },
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 0,
  },
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 1,
  },
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 1,
  },
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 0,
  },
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 0,
  },
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 0,
  },
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 1,
  },
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 1,
  },
  {
    name: "마이크로프로세서실",
    teacher: "봉만영",
    capacity: 3,
    image: "image",
    status: 0,
  },
];

const MeetingRoomContainer: React.FC = () => {
  return <MeetingRoom RoomDummyData={RoomDummyData} />;
};

export default MeetingRoomContainer;
