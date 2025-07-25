import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const MicrophoneIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <rect width="6" height="11" x="9" y="3" rx="3" />
        <path d="M19 11a7 7 0 1 1-14 0m7 7v3" />
      </g>
    </svg>
  );
};

export default MicrophoneIcon;
