import { Link, LinkProps, useLocation } from 'react-router-dom';

import { useBackgroundLocation } from '../../hooks/background-location';

const ModalLink = ({ state, ...rest }: LinkProps) => {
  const location = useLocation();
  const backgroundLocation = useBackgroundLocation();

  return (
    <Link
      state={{ ...state, backgroundLocation: backgroundLocation ?? location }}
      {...rest}
    />
  );
};

export default ModalLink;
