import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUsers } from "@/api/users.api";
import type { IUser } from "@/types/user";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./users.slice";

function* fetchUsersSaga() {
  try {
    const users: IUser[] = yield call(fetchUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    yield put(fetchUsersFailure(errorMessage));
  }
}

export function* usersSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
}
