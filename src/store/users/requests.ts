import axios from '../axios';
import { SearchUsersResponse, UserResponse } from './types';

export const fetchUsersRequest = async (
  query: string,
  limit: number,
  page: number,
): Promise<UserResponse[]> => {
  const { items } = await axios
    .get<SearchUsersResponse>(`search/users`, {
      params: {
        q: query,
        per_page: limit,
        page,
      },
    })
    .then(({ data }) => data);

  const userPromises = items.map(({ login }) =>
    axios.get<UserResponse>(`users/${login}`).then(({ data }) => data),
  );

  return Promise.all(userPromises);
};

export const fetchUserRequest = async (username: string): Promise<UserResponse> => {
  return axios.get<UserResponse>(`users/${username}`).then(({ data }) => data);
};
