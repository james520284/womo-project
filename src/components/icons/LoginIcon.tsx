import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const LoginIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M15 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
        <path d="M21 12H8l3-3m0 6l-3-3" />
      </g>
    </svg>
  );
};
export default LoginIcon;
