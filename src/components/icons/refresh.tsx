import { IconProps } from './types';

const RefreshIcon = ({ size = 16, weight = 1, color = 'currentColor' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="none"
  >
    <path
      d="M15.333 2.667v4h-4M.667 13.333v-4h4"
      stroke={color}
      strokeWidth={weight}
      strokeLinecap="square"
    />
    <path
      d="M2.34 6a6 6 0 0 1 9.9-2.24l3.093 2.907M.667 9.333 3.76 12.24a6 6 0 0 0 9.9-2.24"
      stroke={color}
      strokeWidth={weight}
    />
  </svg>
);

export default RefreshIcon;
