import styled, { css, keyframes } from 'styled-components';

const loadingKeyframes = keyframes`
  from {
    background-position-x: 150%;
  }
  to {
    background-position-x: -50%;
  }
`;

const loadingStyles = css`
  background-color: var(--black-3);
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    var(--black-3);
  background-size: 400% 100%;
  animation: 4s ${loadingKeyframes} ease infinite;
`;

interface CircleSkeletonProps {
  radius: number;
}

export const CircleSkeleton = styled.div<CircleSkeletonProps>`
  width: ${({ radius }) => radius * 2}px;
  height: ${({ radius }) => radius * 2}px;
  border-radius: 100%;
  ${loadingStyles}
`;

interface RectangleSkeletonProps {
  width: number;
  height: number;
}

export const RectangleSkeleton = styled.div<RectangleSkeletonProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 0.5rem;
  ${loadingStyles}
`;
