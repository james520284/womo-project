import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const WalletIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 2.5v-1H8v1c0 .87.278 1.674.749 2.33a15.95 15.95 0 0 0-7.023 3.404l1.285 1.532A13.94 13.94 0 0 1 12 6.5a13.94 13.94 0 0 1 8.989 3.266l1.285-1.532A15.95 15.95 0 0 0 15.25 4.83A4 4 0 0 0 16 2.5v-1h-2v1a2 2 0 1 1-4 0M12 9C5.925 9 1 13.925 1 20v3h22v-3c0-6.075-4.925-11-11-11"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default WalletIcon;
