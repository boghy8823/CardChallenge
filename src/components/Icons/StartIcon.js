import React from "react";

const StartIcon = (props) => {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <polygon
        style="fill:#FFFFFF;"
        points="187.368,146.928 187.368,355.8 382.992,251.368 "
      />
      <path
        style="fill:#DB2B42;"
        d="M256,0.376C114.616,0.376,0,114.824,0,256s114.616,255.624,256,255.624S512,397.176,512,256
      S397.384,0.376,256,0.376z M184.496,146.928l195.624,104.44L184.496,355.8V146.928z"
      />
    </svg>
  );
};

export default StartIcon;
