import { MyPage } from "components";
import React from "react";
const WaitRoomDummyData = [
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "네트워크 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [9, 10, 11],
    reason: "스크럼 회의",
    status: 3,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "UI/UX 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [9, 11],
    reason: "아이디어 구체화 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 2,
  },
  {
    room_image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
    name: "프로그래밍 실",
    teacher: "봉만영 선생님",
    team: "도란도란 개발팀",
    periods: [7, 8, 9],
    reason: "스크럼 회의",
    status: 1,
  },
];

const MypageContainer: React.FC = () => {
  return <MyPage WaitRoomDummyData={WaitRoomDummyData} />;
};

export default MypageContainer;
