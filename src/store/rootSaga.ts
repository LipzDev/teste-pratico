import { all } from 'redux-saga/effects';
import { usersSaga } from './users/users.sagas';

export function* rootSaga() {
  yield all([usersSaga()]);
}
