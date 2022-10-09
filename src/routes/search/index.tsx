import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Divider from '../../components/divider';
import UserCard from '../../components/user-card';
import UserGrid from '../../components/user-grid';
import { useStore } from '../../hooks/store';
import { Container, Title } from './styled';

type Params = {
  query: string;
};

const Search = observer(() => {
  const { query } = useParams<Params>();

  const { search } = useStore();
  const { fetchSearchResults, usernames } = search;

  useEffect(() => {
    if (!query) return;
    fetchSearchResults(query);
  }, [query]);

  return (
    <Container>
      <Divider>
        <Title>Results</Title>
      </Divider>
      <UserGrid>
        {usernames.map(({ username }) => (
          <UserCard key={username} username={username} />
        ))}
      </UserGrid>
    </Container>
  );
});

export default Search;
