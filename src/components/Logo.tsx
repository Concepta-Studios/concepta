interface LogoProps {
  opacity?: string;
  className?: string;
  width?: number;
  height?: number;
}

function Logo({ opacity, className = '' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 91"
      className={'w-[40px] h-[45.5px] sm:w-[80px] sm:h-[91px] '.concat(
        className
      )}
    >
      <defs>
        <clipPath id="clip-path">
          <path
            id="Path_8"
            data-name="Path 8"
            d="M51.669,26.813a3.646,3.646,0,0,0-.833.658c.031-.021.062-.041.095-.059a1.686,1.686,0,1,1-.823,1.2,3.648,3.648,0,1,0,1.56-1.8M45.412,0a45.412,45.412,0,1,0,34.2,75.286l-2.7-1.562L66.8,67.887A31.022,31.022,0,0,1,20.354,63.7a23.791,23.791,0,0,0,12.487,6.923c12.252,2.489,19.577-7.659,15.8-18.985a10.9,10.9,0,1,1-10.413-7.663c.254,0,.506.009.756.026l.2-.04,25.728.05q-.127-1.075-.335-2.124c-.312-1.317-.664-2.6-1.065-3.854a27.438,27.438,0,0,0-4.68-8.239c.006.111.01.224.01.336A6.044,6.044,0,1,1,52.4,24.1a27.327,27.327,0,0,0-13.421-4.279l.03,3.66c-.461-.027-.925-.042-1.393-.042A23.84,23.84,0,0,0,14.8,40.375a31.024,31.024,0,0,1,52-17.436L76.908,17.1l2.7-1.561A45.3,45.3,0,0,0,45.412,0Z"
            transform="translate(0 -0.001)"
            fill="none"
          />
        </clipPath>
      </defs>
      <g
        id="Group_9"
        data-name="Group 9"
        transform="translate(0 -0.001)"
        opacity={opacity ?? '1'}
      >
        <g
          id="Group_6"
          data-name="Group 6"
          transform="translate(0 0.001)"
          clip-path="url(#clip-path)"
        >
          <path
            id="Path_9"
            data-name="Path 9"
            d="M0,0H120.72V120.167H0Z"
            transform="translate(-45.301 48.58) rotate(-47)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
}

export default Logo;
