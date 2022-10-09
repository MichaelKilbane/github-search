import { useEffect, useState } from 'react';

type UsePropTransitionReturn<T> = [T, boolean];

export const usePropTransition = <T>(
  prop: T,
  transitionLength: number,
): UsePropTransitionReturn<T> => {
  const [value, setValue] = useState<T>(prop);
  const [inTransition, setInTransition] = useState<boolean>(false);

  useEffect(() => {
    if (prop === value) return;

    setInTransition(true);

    const timeout = setTimeout(() => {
      setValue(prop);
      setInTransition(false);
    }, transitionLength);

    return () => clearTimeout(timeout);
  }, [prop]);

  return [value, inTransition];
};
