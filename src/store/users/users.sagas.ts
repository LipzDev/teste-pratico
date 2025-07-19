import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsers } from '../../api/users.api';
import type { User } from '../../types/user';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from './users.slice';

function* fetchUsersSaga() {
  try {
    const users: User[] = yield call(fetchUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    yield put(fetchUsersFailure(errorMessage));
  }
}

export function* usersSaga() {
  yield takeEvery(fetchUsersRequest.type, fetchUsersSaga);
}