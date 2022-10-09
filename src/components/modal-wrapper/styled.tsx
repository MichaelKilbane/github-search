import styled from 'styled-components';

export const IconContainer = styled.div`
  padding: 0.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 1rem;
  transition: all 0.2s ease;
  color: var(--white-3);

  :hover {
    color: var(--white-2);
    background: var(--white-3-5);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background: var(--black-1-80);
  backdrop-filter: blur(10px);
`;
