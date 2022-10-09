import styled from 'styled-components';

interface Props {
  radius: number;
}

const Avatar = styled.img<Props>`
  width: ${({ radius }) => radius * 2}px;
  height: ${({ radius }) => radius * 2}px;
  border-radius: 100%;
  border: 1px solid var(--black-3);
`;

export default Avatar;
