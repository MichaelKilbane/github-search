import { createContext, useContext } from 'react';

import { Store } from '../store';

const StoreContext = createContext<Store | null>(null);

export const StoreProvider = StoreContext.Provider;

export const useStore = (): Store => {
  const store = useContext(StoreContext);

  if (store === null)
    throw new Error('Store cannot be null, please add a context provider.');

  return store;
};
