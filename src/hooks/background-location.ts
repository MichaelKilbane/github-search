import { Location, useLocation } from 'react-router-dom';

export const useBackgroundLocation = (): Location => {
  const location = useLocation();
  return location.state && location.state.backgroundLocation;
};
