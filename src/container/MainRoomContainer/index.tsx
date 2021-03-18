import { MainRoom } from "components";
import React from "react";

const RoomDummyData = [
  {
    name: "1층 홈베이스",
    room_image:
      "https://lh3.googleusercontent.com/proxy/15b5oEkJhPsw9QIKYwIfEmSdsBDIPe8H4Ofwe-MMZz6H1EtXXg7Vtxa8HeU1RqGLMlsCPwE3mM5-eq8mYnNK9-kDSmbt7GdD1L-3OvSyvb3p1D_TY3koN5q75lvkSs0vmTI3q50",
    max_team: 2,
    status: 0,
  },
  {
    name: "2층 홈베이스",
    room_image:
      "https://lh3.googleusercontent.com/proxy/15b5oEkJhPsw9QIKYwIfEmSdsBDIPe8H4Ofwe-MMZz6H1EtXXg7Vtxa8HeU1RqGLMlsCPwE3mM5-eq8mYnNK9-kDSmbt7GdD1L-3OvSyvb3p1D_TY3koN5q75lvkSs0vmTI3q50",
    max_team: 3,
    status: 1,
  },
  {
    name: "3층 홈베이스",
    room_image:
      "https://lh3.googleusercontent.com/proxy/15b5oEkJhPsw9QIKYwIfEmSdsBDIPe8H4Ofwe-MMZz6H1EtXXg7Vtxa8HeU1RqGLMlsCPwE3mM5-eq8mYnNK9-kDSmbt7GdD1L-3OvSyvb3p1D_TY3koN5q75lvkSs0vmTI3q50",
    max_team: 4,
    status: 0,
  },
  {
    name: "1층 프로그래밍실",
    room_image:
      "https://lh3.googleusercontent.com/proxy/15b5oEkJhPsw9QIKYwIfEmSdsBDIPe8H4Ofwe-MMZz6H1EtXXg7Vtxa8HeU1RqGLMlsCPwE3mM5-eq8mYnNK9-kDSmbt7GdD1L-3OvSyvb3p1D_TY3koN5q75lvkSs0vmTI3q50",
    max_team: 5,
    status: 1,
  },
];

const MainRoomContainer: React.FC = () => {
  return <MainRoom RoomDummyData={RoomDummyData} />;
};

export default MainRoomContainer;
