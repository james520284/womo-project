import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const MoreImageIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M21 17H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3z"
      />
    </svg>
  );
};

export default MoreImageIcon;
