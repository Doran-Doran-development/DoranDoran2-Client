import { RentalRoom } from "components";
import React from "react";

const SelectTitleArray = [
  { text: "불가능", background: "#C4C4C4", border: "#c4c4c4" },
  { text: "선택됨", background: "#86A8DC", border: "#86A8DC" },
  { text: "선택가능", background: "#FFFFFF", border: "#86A8DC" },
];
const ClasstimeItem = [0, 1, 1, 1, 1, 2, 0, 2, 0, 2, 2];
const Teams = [
  {
    teamName: "손오공",
    teamPeople: [
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
    ],
  },
  {
    teamName: "도란도란 개발팀",
    teamPeople: [
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
    ],
  },
  {
    teamName: "Zolpia",
    teamPeople: [
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
      { name: "신원준", email: "s19053@gsm.hs.kr" },
    ],
  },
];

const TeamPeopleListDummyData = [
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
  { name: "신원준", email: "s19053@gsm.hs.kr" },
];
const RentalRoomContainer: React.FC = () => {
  return (
    <RentalRoom
      SelectTitleArray={SelectTitleArray}
      ClasstimeItem={ClasstimeItem}
      TeamPeopleListDummyData={TeamPeopleListDummyData}
      Teams={Teams}
    />
  );
};

export default RentalRoomContainer;
