import { UserSnapshot } from './model';
import { UserResponse } from './types';

export const transformUserResponse = (user: UserResponse): UserSnapshot => ({
  id: user.login,
  username: user.login,
  name: user.name || undefined,
  description: user.bio || undefined,
  location: user.location || undefined,
  repositories: user.public_repos,
  followers: user.followers,
  avatarUrl: user.avatar_url,
  profileUrl: user.html_url,
  isAdmin: user.site_admin,
});
