import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const SortDownIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 3.25a.75.75 0 0 1 .75.75v13.75l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 16a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        d="M5.25 11a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
        opacity="0.7"
      />
      <path
        fill="currentColor"
        d="M7.25 6A.75.75 0 0 1 8 5.25h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6"
        opacity="0.4"
      />
    </svg>
  );
};

export default SortDownIcon;
