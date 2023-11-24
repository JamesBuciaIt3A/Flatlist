import React from 'react';

function FiMoreHorizontal(props) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      {...props}
    >
      <circle cx={12} cy={12} r={1} />
      <circle cx={19} cy={12} r={1} />
      <circle cx={5} cy={12} r={1} />
    </svg>
  );
}

export default FiMoreHorizontal;