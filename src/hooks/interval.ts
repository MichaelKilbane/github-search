import { useCallback, useEffect, useRef } from 'react';

type IntervalCallback = () => void;

export const useInterval = (callback: IntervalCallback, delay: number) => {
  const intervalRef = useRef<number>();
  const callbackRef = useRef<IntervalCallback>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const stop = useCallback(() => {
    clearInterval(intervalRef.current);
  }, [delay]);

  const start = useCallback(() => {
    intervalRef.current = setInterval(() => callbackRef.current(), delay);
  }, [delay]);

  const reset = useCallback(() => {
    stop();
    start();
  }, [delay]);

  useEffect(() => {
    start();
    return () => stop();
  }, []);

  return { start, stop, reset };
};
