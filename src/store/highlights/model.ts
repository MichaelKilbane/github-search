import { cast, flow, getParent, types } from 'mobx-state-tree';

import { UserModel } from '../users/model';

export const HighlightsStore = types
  .model({
    usernames: types.array(types.reference(UserModel)),
  })
  .actions((self) => ({
    fetchHighlights: flow(function* fetchHighlights() {
      const limit = 8;
      const page = Math.floor(Math.random() * 100);

      const { users } = getParent(self);

      const query = `type:user`;
      const usernames: string[] = yield users.fetchUsers(query, limit, page);

      self.usernames = cast(usernames);
    }),
  }));
