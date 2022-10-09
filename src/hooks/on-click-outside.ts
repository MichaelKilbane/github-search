import { useCallback, useEffect, useRef } from 'react';

export const useOnClickOutside = <T extends HTMLElement>(onClickOutside: () => void) => {
  const ref = useRef<T>(null);

  const clickHandler = useCallback(
    (event: MouseEvent) => {
      if (ref.current === null) return;

      const target = event.target as T;

      if (!ref.current.contains(target)) onClickOutside();
    },
    [onClickOutside],
  );

  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, []);

  return ref;
};
