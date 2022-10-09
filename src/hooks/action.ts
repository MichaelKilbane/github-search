import { useCallback, useEffect, useState } from 'react';

type UseActionReturn<T> = [boolean, T | undefined];

export const useAction = <T>(action: () => Promise<T>): UseActionReturn<T> => {
  const [result, setResult] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const stableAction = useCallback(action, []);

  useEffect(() => {
    stableAction().then((value) => {
      setResult(value);
      setIsLoading(false);
    });
  }, [stableAction]);

  return [isLoading, result];
};
