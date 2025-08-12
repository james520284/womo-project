import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const CollectCoinIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" viewBox="0 0 48 48" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="m26.829 37.172l10.343-10.343m-16 0L10.829 37.172m16-16l10.343-10.343M10.829 21.172l10.343-10.343M12 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0-16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default CollectCoinIcon;
