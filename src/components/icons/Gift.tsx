import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const GiftIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1">
        <path strokeLinecap="round" d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2A3.5 3.5 0 0 1 12 5.5V7H8.5A2.5 2.5 0 0 1 6 4.5Zm12 0A2.5 2.5 0 0 0 15.5 2A3.5 3.5 0 0 0 12 5.5V7h3.5A2.5 2.5 0 0 0 18 4.5Z" />
        <path strokeLinecap="round" d="M3 7h18v4H3zm9 4v10" />
      </g>
    </svg>
  );
};

export default GiftIcon;
