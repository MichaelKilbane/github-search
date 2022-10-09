import styled from 'styled-components';

const Divider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  ::after {
    content: '';
    flex: 1 1 100%;
    height: 1px;
    background: var(--black-3);
  }
`;

export default Divider;
