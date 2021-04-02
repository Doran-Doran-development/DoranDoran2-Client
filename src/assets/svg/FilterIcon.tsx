import * as React from "react";

function FilterIcon() {
  return (
    <svg
      width={57}
      height={57}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#prefix__filter0_d)">
        <rect x={2} y={2} width={51} height={51} rx={10} fill="#fff" />
      </g>
      <path
        stroke="#86A8DC"
        strokeWidth={3}
        d="M14.5 11v33M40.5 11v33M27.5 11v33"
      />
      <circle cx={14.5} cy={19.5} r={3.5} fill="#86A8DC" />
      <circle cx={27.5} cy={37.5} r={3.5} fill="#86A8DC" />
      <circle cx={40.5} cy={25.5} r={3.5} fill="#86A8DC" />
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={57}
          height={57}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius={2}
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset dx={1} dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 0.8 0 0 0 0 0.8 0 0 0 0 0.8 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default FilterIcon;
