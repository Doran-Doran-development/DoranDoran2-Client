import React from "react";
import AdminEscape from "../../components/AdminEscape";

const EscapeApplyListDummyData = [
  { classnum: 3101, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3102, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3103, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3104, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3105, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3106, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3166, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3124, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3144, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3132, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3123, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3124, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3167, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3127, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3194, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3126, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3132, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3108, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3109, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3109, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3159, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3105, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3109, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3109, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3109, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3139, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3199, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3109, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3149, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3109, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
  { classnum: 3109, name: "김철수", escapeTime: "16:30 ~ 17:30", region: "병원 방문", status: "수락" },
];

const AdminEscapeContainer: React.FC = () => {
  return <AdminEscape EscapeApplyList={EscapeApplyListDummyData} />;
};
export default AdminEscapeContainer;
