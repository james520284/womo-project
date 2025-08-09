import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const AddDuotoneIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M6 12h12m-6 6V6"
      />
    </svg>
  );
};

export default AddDuotoneIcon;
