import { Instance, types } from 'mobx-state-tree';

import { HighlightsStore } from './highlights/model';
import { SearchStore } from './search/model';
import { UserStore } from './users/model';

export const RootStore = types.model({
  users: UserStore,
  highlights: HighlightsStore,
  search: SearchStore,
});

export type Store = Instance<typeof RootStore>;

export const store = RootStore.create({
  users: {
    items: {},
    selected: undefined,
  },
  highlights: {
    usernames: [],
  },
  search: {
    usernames: [],
  },
});
