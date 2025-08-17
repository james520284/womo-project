import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const ArrowIcon = (props: Props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
export default ArrowIcon;
