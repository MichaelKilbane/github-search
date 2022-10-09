import { IconProps } from './types';

const SearchIcon = ({ size = 16, weight = 1, color = 'currentColor' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="none"
  >
    <path
      d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9"
      stroke={color}
      strokeWidth={weight}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;
