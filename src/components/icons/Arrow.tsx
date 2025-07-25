import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const ArrowIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 1024 1024" {...props}>
      <path
        fill="currentColor"
        d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496"
      />
    </svg>
  );
};

export default ArrowIcon;
