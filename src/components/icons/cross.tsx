import { IconProps } from './types';

const CrossIcon = ({ size = 16, weight = 1, color = 'currentColor' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="none"
  >
    <path
      d="m12 4-8 8M4 4l8 8"
      stroke={color}
      strokeWidth={weight}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default CrossIcon;
