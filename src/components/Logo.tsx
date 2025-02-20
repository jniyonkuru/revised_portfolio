import { SvgIcon } from "@mui/material";

function Logo(props:Record<string,any>) {
  return (
    <SvgIcon {...props} viewBox="0 0 80 80">
        <svg>
      <g>
        <title>Layer 1</title>
        <text
          fontWeight="bold"
          transform="matrix(1.40201 0 0 0.87393 -18.2171 -10.4706)"
          stroke="#000"
          xmlSpace="preserve"
          textAnchor="start"
          fontFamily="'Lemonada'"
          fontSize="40"
          y="71.97968"
          x="13.68605"
          strokeWidth="0"
          fill="#0baed4"
        >
          JN
        </text>
        <path
          stroke="#0baed4"
          d="m35,73l16,0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="m5,59l72,0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          stroke="#0baed4"
          fill="none"
        />
        <path
          stroke="#0baed4"
          d="m27,67l32,0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          fill="none"
        />
        <ellipse
          stroke="#0baed4"
          ry="2"
          rx="1"
          cy="82"
          cx="43"
          strokeWidth="4"
          fill="none"
        />
      </g>
      </svg>
    </SvgIcon>
  );
}

export default Logo;
