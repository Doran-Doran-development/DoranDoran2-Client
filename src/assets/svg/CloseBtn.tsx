import * as React from "react";

interface CloseBtnProps {
  width: number;
  height: number;
}

const CloseBtn: React.FC<CloseBtnProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="#7D7D7D" d="M31.741.356L.35 31.232M31.52 31.741L.645.351" />
    </svg>
  );
};

export default CloseBtn;
