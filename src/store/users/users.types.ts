import type { User } from '../../types/user';

export interface UsersState {
  data: User[];
  loading: boolean;
  error?: string;
}

export const FETCH_USERS_REQUEST = 'users/fetchUsersRequest';
export const FETCH_USERS_SUCCESS = 'users/fetchUsersSuccess';
export const FETCH_USERS_FAILURE = 'users/fetchUsersFailure';

export interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

export interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
}

export interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

export type UsersActionTypes = 
  | FetchUsersRequestAction 
  | FetchUsersSuccessAction 
  | FetchUsersFailureAction;