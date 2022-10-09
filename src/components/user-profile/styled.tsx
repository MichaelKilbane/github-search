import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  gap: 3rem;
  background: var(--black-2);
  border: 1px solid var(--black-3);
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.75rem;
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25rem;
`;

export const Name = styled.h1`
  margin: 0;
`;

export const Username = styled.h2`
  font-weight: 500;
  color: var(--white-3);
  margin: 0;
`;

export const Location = styled.div`
  color: var(--white-3);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
