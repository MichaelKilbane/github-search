import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  background: var(--black-2);
  border: 1px solid var(--black-3);
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  max-width: 100%;
`;

export const Username = styled.h3`
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
`;

export const Location = styled.div`
  color: var(--white-3);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  max-width: 100%;
`;

export const LocationText = styled.div`
  flex-shrink: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
