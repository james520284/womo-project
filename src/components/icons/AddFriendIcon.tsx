import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const AddFriendIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="6" r="4" />
        <path
          strokeLinecap="round"
          d="M21 10h-2m0 0h-2m2 0V8m0 2v2m-1.002 6q.002-.246.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S2 22 10 22c2.231 0 3.84-.157 5-.437"
        />
      </g>
    </svg>
  );
};

export default AddFriendIcon;
