import { useCallback } from 'react';
import {
  NavigateFunction,
  NavigateOptions,
  To,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { useBackgroundLocation } from './background-location';

export const useModalNavigate = (): NavigateFunction => {
  const navigate = useNavigate();
  const location = useLocation();
  const backgroundLocation = useBackgroundLocation();

  const modalNavigate: NavigateFunction = useCallback(
    (to: To | number, options: NavigateOptions = {}) => {
      if (typeof to === 'number') {
        navigate(to);
        return;
      }

      const { state, ...rest } = options;

      navigate(to, {
        ...rest,
        state: { ...state, backgroundLocation: backgroundLocation ?? location },
      });
    },
    [navigate, location, backgroundLocation],
  );

  return modalNavigate;
};
