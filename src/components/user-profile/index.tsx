import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { useStore } from '../../hooks/store';
import Avatar from '../avatar';
import ExternalLink from '../external-link';
import MapPinIcon from '../icons/map-pin';
import Tag from '../tag';
import UserProfileSkeleton from './skeleton';
import { Container, Details, Location, Name, Names, Tags, Username } from './styled';
import { toFormattedNumber } from './utils';

interface Props {
  username: string;
}

const UserProfile = observer(({ username }: Props) => {
  const { users } = useStore();
  const user = users.items.get(username);

  useEffect(() => {
    if (!user) users.fetchUser(username);
  }, [user, users]);

  if (!user) return <UserProfileSkeleton />;

  const { name, avatarUrl, location, profileUrl, isAdmin, followers, repositories } =
    user;

  return (
    <Container>
      <Avatar radius={96} src={avatarUrl} />
      <Details>
        <Names>
          <Name>{name ?? username}</Name>
          {name && <Username>{username}</Username>}
        </Names>
        <Location>
          <MapPinIcon size={12} />
          {location ?? 'Null Island'}
        </Location>
        <ExternalLink href={profileUrl} target="_blank">
          View on Github
        </ExternalLink>
        <Tags>
          <Tag>{toFormattedNumber(followers)} followers</Tag>
          <Tag>{toFormattedNumber(repositories)} repositories</Tag>
          <Tag>{isAdmin ? 'Admin' : 'Not admin'}</Tag>
        </Tags>
      </Details>
    </Container>
  );
});

export default UserProfile;
