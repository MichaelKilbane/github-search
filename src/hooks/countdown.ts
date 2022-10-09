import { useCallback, useState } from 'react';

import { useInterval } from './interval';
import { usePageVisibility } from './visibility';

export const useCountdownToCallback = (
  callback: () => void,
  seconds: number,
  pauseWhilePageHidden = true,
) => {
  const [value, setValue] = useState<number>(seconds);

  const isPageVisible = usePageVisibility();

  const advanceCountdown = useCallback(() => {
    if (pauseWhilePageHidden && !isPageVisible) return;

    const newValue = value - 1;

    if (newValue === 0) callback();

    setValue(newValue || seconds);
  }, [value, callback, pauseWhilePageHidden, isPageVisible]);

  const { start, stop, reset } = useInterval(advanceCountdown, 1000);

  const resetCountdown = useCallback(() => {
    setValue(seconds);
    reset();
  }, [setValue, seconds]);

  return {
    value,
    start,
    stop,
    reset: resetCountdown,
  };
};
