import { observer } from 'mobx-react-lite';

import { useModalNavigate } from '../../hooks/modal-navigate';
import { useStore } from '../../hooks/store';
import Avatar from '../avatar';
import ExternalLink from '../external-link';
import MapPinIcon from '../icons/map-pin';
import Tag from '../tag';
import UserCardSkeleton from './skeleton';
import { Container, Details, Location, LocationText, Username } from './styled';

interface Props {
  username: string;
}

const UserCard = observer(({ username }: Props) => {
  const navigate = useModalNavigate();
  const { users } = useStore();
  const user = users.items.get(username);

  if (!user) return <UserCardSkeleton />;

  const { avatarUrl, location, profileUrl, isAdmin } = user;

  return (
    <Container
      variants={{
        grow: { scale: 1.02 },
        shrink: { scale: 0.98 },
      }}
      whileHover="grow"
      whileTap="shrink"
      onClick={() => navigate(`/user/${username}`)}
    >
      <Avatar radius={48} src={avatarUrl} />
      <Details>
        <Username>{username}</Username>
        <Location>
          <MapPinIcon size={12} />
          <LocationText>{location ?? 'Null Island'}</LocationText>
        </Location>
        <ExternalLink href={profileUrl} target="_blank">
          View on Github
        </ExternalLink>
        <Tag>{isAdmin ? 'Admin' : 'Not admin'}</Tag>
      </Details>
    </Container>
  );
});

export default UserCard;
