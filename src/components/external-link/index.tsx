import styled from 'styled-components';

const ExternalLink = styled.a`
  position: relative;
  color: var(--blue-2);
  font-weight: 600;
  text-decoration: none;

  ::after {
    content: '';
    width: 0;
    height: 1px;
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--blue-2);
    transition: all 0.2s ease;
  }

  :hover {
    ::after {
      width: 100%;
    }
  }
`;

export default ExternalLink;
