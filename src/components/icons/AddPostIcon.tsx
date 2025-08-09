import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const AddPostIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" viewBox="0 0 48 48" {...props}>
      <defs>
        <mask id="ipSAddOne0">
          <g fill="none" strokeLinejoin="round" strokeWidth="4">
            <path
              fill="#fff"
              stroke="#fff"
              d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
            />
            <path stroke="#000" strokeLinecap="round" d="M24 16v16m-8-8h16" />
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAddOne0)" />
    </svg>
  );
};

export default AddPostIcon;
