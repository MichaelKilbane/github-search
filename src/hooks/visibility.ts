import { useCallback, useEffect, useState } from 'react';

export const usePageVisibility = () => {
  const [isPageVisible, setIsPageVisible] = useState<boolean>(!document.hidden);

  const updateVisibility = useCallback(() => {
    setIsPageVisible(!document.hidden);
  }, []);

  useEffect(() => {
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  return isPageVisible;
};
