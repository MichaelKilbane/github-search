import { cast, flow, getParent, types } from 'mobx-state-tree';

import { UserModel } from '../users/model';

export const SearchStore = types
  .model({
    usernames: types.array(types.reference(UserModel)),
  })
  .actions((self) => ({
    fetchSearchResults: flow(function* fetchSearchResults(value: string) {
      const limit = 16;

      const { users } = getParent(self);

      const query = `${value} type:user`;
      const usernames: string[] = yield users.fetchUsers(query, limit, 1);

      self.usernames = cast(usernames);
    }),
  }));
