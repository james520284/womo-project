import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const ScanIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3 4v5h2V5h4V3H4a1 1 0 0 0-1 1m18 5V4a1 1 0 0 0-1-1h-5v2h4v4zm-2 10h-4v2h5a1 1 0 0 0 1-1v-5h-2zM9 21v-2H5v-4H3v5a1 1 0 0 0 1 1zM2 11h20v2H2z"
      />
    </svg>
  );
};

export default ScanIcon;
