import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const AnalyzeIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M6.5 4v9h3V4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1m-1 3V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1H12a2 2 0 0 1 2 2v6.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V9a2 2 0 0 1 2-2zm0 6V8H4a1 1 0 0 0-1 1v4zm5 0H13V7a1 1 0 0 0-1-1h-1.5z"
      />
    </svg>
  );
};

export default AnalyzeIcon;
