import { CircleSkeleton, RectangleSkeleton } from '../skeleton';
import { Container, Details, Tags } from './styled';

const UserProfileSkeleton = () => (
  <Container>
    <CircleSkeleton radius={96} />
    <Details>
      <RectangleSkeleton width={150} height={29} />
      <RectangleSkeleton width={110} height={24} />
      <RectangleSkeleton width={120} height={15} />
      <RectangleSkeleton width={100} height={15} />
      <Tags>
        <RectangleSkeleton width={80} height={24} />
        <RectangleSkeleton width={90} height={24} />
        <RectangleSkeleton width={70} height={24} />
      </Tags>
    </Details>
  </Container>
);

export default UserProfileSkeleton;
