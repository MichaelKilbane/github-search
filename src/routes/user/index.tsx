import { useNavigate, useParams } from 'react-router-dom';

import ModalWrapper from '../../components/modal-wrapper';
import UserProfile from '../../components/user-profile';
import { useBackgroundLocation } from '../../hooks/background-location';

type Params = {
  username: string;
};

const User = () => {
  const navigate = useNavigate();
  const backgroundLocation = useBackgroundLocation();

  const { username } = useParams<Params>();

  return (
    <ModalWrapper onClose={() => navigate(backgroundLocation)}>
      {username && <UserProfile username={username} />}
    </ModalWrapper>
  );
};

export default User;
