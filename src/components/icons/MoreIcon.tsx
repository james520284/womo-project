import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  rotate?: number;
};

const MoreIcon = ({ rotate = 0, style, ...rest }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotate}deg)`, transformOrigin: '50% 50%', ...style }}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M14 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-4a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
      />
    </svg>
  );
};

export default MoreIcon;
