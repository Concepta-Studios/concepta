import { CSSProperties } from 'react';

interface ChevronRightIconProps {
  className?: string;
  stroke?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

function ChevronRightIcon({
  className = '',
  stroke,
  style,
  onClick,
}: ChevronRightIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={stroke}
      className={'w-6 h-6 '.concat(className)}
      style={style}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export default ChevronRightIcon;
