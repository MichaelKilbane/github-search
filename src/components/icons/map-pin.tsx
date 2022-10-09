import { IconProps } from './types';

const MapPinIcon = ({ size = 16, weight = 1, color = 'currentColor' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="none"
  >
    <path
      d="M14 6.667c0 4.666-6 8.666-6 8.666s-6-4-6-8.666a6 6 0 1 1 12 0Z"
      stroke={color}
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill={color}
      stroke={color}
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MapPinIcon;
