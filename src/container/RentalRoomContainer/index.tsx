import { RentalRoom } from "components";
import React from "react";

const SelectTitleArray = [
  { text: "불가능", background: "#C4C4C4", border: "#c4c4c4" },
  { text: "선택됨", background: "#86A8DC", border: "#86A8DC" },
  { text: "선택가능", background: "#FFFFFF", border: "#86A8DC" },
];
const ClasstimeItem = [0, 1, 1, 1, 1, 2, 0, 2, 0, 2, 2];
const RentalRoomContainer: React.FC = () => {
  return (
    <RentalRoom
      SelectTitleArray={SelectTitleArray}
      ClasstimeItem={ClasstimeItem}
    />
  );
};

export default RentalRoomContainer;
