import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const ExchangeIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M7.53 6.53a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H17a.75.75 0 0 0 0-1.5H6.81zm8.94 6.94a.75.75 0 0 0 0 1.06l.72.72H7a.75.75 0 0 0 0 1.5h10.19l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0"
      />
    </svg>
  );
};

export default ExchangeIcon;
