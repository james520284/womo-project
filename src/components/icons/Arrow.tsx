import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const ArrowIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 10l5 5m0 0l5-5"
      />
    </svg>
  );
};

export default ArrowIcon;
