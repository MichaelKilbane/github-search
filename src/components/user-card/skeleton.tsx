import { CircleSkeleton, RectangleSkeleton } from '../skeleton';
import { Container, Details } from './styled';

const UserCardSkeleton = () => (
  <Container>
    <CircleSkeleton radius={48} />
    <Details>
      <RectangleSkeleton width={110} height={20} />
      <RectangleSkeleton width={120} height={15} />
      <RectangleSkeleton width={100} height={15} />
      <RectangleSkeleton width={80} height={24} />
    </Details>
  </Container>
);

export default UserCardSkeleton;
