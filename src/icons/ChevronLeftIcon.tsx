import { CSSProperties } from 'react';

interface ChevronLeftIconProps {
  className?: string;
  stroke?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

function ChevronLeftIcon({
  className = '',
  stroke,
  style,
  onClick,
}: ChevronLeftIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={stroke ?? 'currentColor'}
      className={'w-6 h-6 '.concat(className)}
      style={style}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export default ChevronLeftIcon;
