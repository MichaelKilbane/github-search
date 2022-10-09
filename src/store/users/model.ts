import { flow, Instance, SnapshotIn, types } from 'mobx-state-tree';

import { fetchUserRequest, fetchUsersRequest } from './requests';
import { transformUserResponse } from './transformers';
import { UserResponse } from './types';

export const UserModel = types.model({
  id: types.identifier,
  username: types.string,
  name: types.maybe(types.string),
  description: types.maybe(types.string),
  location: types.maybe(types.string),
  repositories: types.number,
  followers: types.number,
  avatarUrl: types.string,
  profileUrl: types.string,
  isAdmin: types.boolean,
});

export type User = Instance<typeof UserModel>;
export type UserSnapshot = SnapshotIn<typeof UserModel>;

export const UserStore = types
  .model({
    items: types.map(UserModel),
    selected: types.safeReference(UserModel),
  })
  .actions((self) => ({
    fetchUsers: flow(function* fetchUsers(query: string, limit: number, page: number) {
      const userResponses: UserResponse[] = yield fetchUsersRequest(query, limit, page);
      const userSnapshots: UserSnapshot[] = userResponses.map(transformUserResponse);
      userSnapshots.forEach((userSnapshot) => self.items.put(userSnapshot));

      return userSnapshots.map(({ username }) => username);
    }),
    fetchUser: flow(function* fetchUser(username: string) {
      const userResponse: UserResponse = yield fetchUserRequest(username);
      const userSnapshot: UserSnapshot = transformUserResponse(userResponse);
      self.items.put(userSnapshot);
    }),
  }));
