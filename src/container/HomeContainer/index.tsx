import { Home } from "components";
import React from "react";

const ClassList = [
  {
    grade: 1,
    classnum: 1,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
  {
    grade: 1,
    classnum: 2,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
  {
    grade: 1,
    classnum: 3,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
  {
    grade: 1,
    classnum: 4,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
  {
    grade: 2,
    classnum: 1,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
  {
    grade: 2,
    classnum: 2,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
  {
    grade: 2,
    classnum: 3,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
  {
    grade: 2,
    classnum: 4,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
  {
    grade: 3,
    classnum: 1,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
  {
    grade: 3,
    classnum: 2,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
  {
    grade: 3,
    classnum: 3,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
  {
    grade: 3,
    classnum: 4,
    teacher: "봉만영 선생님",
    currentPerson: 19,
    personCount: 20,
  },
];

const PersonStatusList = [
  { classnum: 3101, name: "이도운", status: 2, etc: "미" },
  { classnum: 3102, name: "이도운", status: 3, etc: "미" },
  { classnum: 3103, name: "이도운", status: 1, etc: "미" },
  { classnum: 3104, name: "이도운", status: 3, etc: "미" },
  { classnum: 3105, name: "이도운", status: 3, etc: "미" },
  { classnum: 3106, name: "이도운", status: 2, etc: "미" },
  { classnum: 3107, name: "이도운", status: 1, etc: "미" },
  { classnum: 3108, name: "이도운", status: 1, etc: "미" },
  { classnum: 3109, name: "이도운", status: 1, etc: "미" },
  { classnum: 3110, name: "이도운", status: 1, etc: "미" },
  { classnum: 3111, name: "이도운", status: 1, etc: "미" },
  { classnum: 3112, name: "이도운", status: 1, etc: "미" },
  { classnum: 3113, name: "이도운", status: 2, etc: "미" },
  { classnum: 3114, name: "이도운", status: 3, etc: "미" },
  { classnum: 3115, name: "이도운", status: 1, etc: "미" },
  { classnum: 3116, name: "이도운", status: 1, etc: "미" },
  { classnum: 3117, name: "이도운", status: 1, etc: "미" },
  { classnum: 3118, name: "이도운", status: 2, etc: "미" },
];
const HomeContainer: React.FC = () => {
  return <Home ClassList={ClassList} PersonStatusList={PersonStatusList} />;
};

export default HomeContainer;
