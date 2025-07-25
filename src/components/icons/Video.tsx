import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const VideoIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="256" viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="m164.44 105.34l-48-32A8 8 0 0 0 104 80v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 129.05V95l25.58 17ZM216 40H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 128H40V56h176zm16 40a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"
      />
    </svg>
  );
};

export default VideoIcon;
