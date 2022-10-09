import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useState } from 'react';

import Divider from '../../components/divider';
import UserCard from '../../components/user-card';
import UserGrid from '../../components/user-grid';
import { useCountdownToCallback } from '../../hooks/countdown';
import { useStore } from '../../hooks/store';
import RefreshButton from './refresh-button';
import { Container, Title } from './styled';

const Highlights = observer(() => {
  const { highlights } = useStore();
  const { fetchHighlights, usernames } = highlights;

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const loadUsers = useCallback(() => {
    setIsRefreshing(true);
    fetchHighlights().then(() => {
      setIsRefreshing(false);
    });
  }, []);

  const { value, stop, reset } = useCountdownToCallback(loadUsers, 30);

  useEffect(() => {
    if (isRefreshing) stop();
    if (!isRefreshing) reset();
  }, [isRefreshing]);

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Container>
      <Divider>
        <Title>Highlights</Title>
        <RefreshButton disabled={isRefreshing} onClick={loadUsers}>
          {value}
        </RefreshButton>
      </Divider>
      <UserGrid>
        {usernames.map(({ username }) => (
          <UserCard key={username} username={username} />
        ))}
      </UserGrid>
    </Container>
  );
});

export default Highlights;
