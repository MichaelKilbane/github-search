import { motion } from 'framer-motion';
import styled from 'styled-components';

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 8px;
  background: var(--blue-1);
  font-size: var(--font-size-5);
  font-family: var(--default-font-family);
  color: var(--white-1);
  font-weight: 500;

  :disabled {
    background: var(--black-3);
    color: var(--white-3);
  }
`;

export default Button;
