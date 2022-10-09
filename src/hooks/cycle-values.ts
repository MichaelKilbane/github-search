import { useCallback, useState } from 'react';

import { useInterval } from './interval';

export const useCycleValues = <T>(values: T[], intervalLength: number) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedValue, setSelectedValue] = useState<T>(values[0]);

  const advanceValue = useCallback(() => {
    const newSelectedIndex = (selectedIndex + 1) % values.length;
    setSelectedIndex(newSelectedIndex);
    setSelectedValue(values[newSelectedIndex]);
  }, [selectedIndex]);

  useInterval(() => advanceValue(), intervalLength);

  return selectedValue;
};
