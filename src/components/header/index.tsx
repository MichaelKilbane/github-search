import { useNavigate } from 'react-router-dom';

import { usePropTransition } from '../../hooks/prop-transition';
import SearchBar from '../search-bar';
import { Container, Name, Subtitle, TextContainer, Title } from './styled';

interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  const navigate = useNavigate();

  const [transitionName, inTransition] = usePropTransition(name, 500);

  return (
    <Container>
      <TextContainer>
        <Title onClick={() => navigate('/')}>GitHub Search</Title>
        <Subtitle>
          Find the next <Name inTransition={inTransition}>{transitionName}</Name>
        </Subtitle>
      </TextContainer>
      <SearchBar onSubmit={(query) => navigate(`search/${query}`)} />
    </Container>
  );
};

export default Header;
