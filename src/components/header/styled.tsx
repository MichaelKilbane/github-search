import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  color: var(--white-2);
  font-weight: 700;
  margin: 0;
  cursor: pointer;
`;

export const Subtitle = styled.h4`
  color: var(--white-3);
  font-weight: 600;
  margin: 0;
`;

interface NameProps {
  inTransition?: boolean;
}

export const Name = styled.span<NameProps>`
  display: inline-block;
  color: var(--blue-2);
  opacity: 1;
  transform: translateY(0);
  transition: all 0.5s ease;

  ${({ inTransition }) =>
    inTransition &&
    css`
      opacity: 0;
      transform: translateY(100%);
    `}
`;
