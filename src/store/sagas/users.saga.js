import { takeEvery, all, call, apply, put } from 'redux-saga/effects';

import { api } from '../../api';
import { startFetching, fill, setFetchingError, stopFetching } from '../actions/users.actions';
import { types } from '../types';

function* fetchUsers() {
  try {
    yield put(startFetching());
    const { data } = yield apply(api, api.users.fetch, []);
    yield put(fill(data));
  } catch(error) {
    yield put(setFetchingError(error));
  } finally {
    yield put(stopFetching());
  }
}

function* createUser({ payload }) {
  try {
    yield put(startFetching());
    yield call(api.users.create, payload);

  } catch (error) {
    yield put({
      type: types.USERS_SET_FETCHING_ERROR,
      payload: error,
    });
  } finally {
    yield put(stopFetching());
  }
}

function* updateUser({ payload }) {
  try {
    yield put(startFetching());
    yield call(api.users.update, payload.id, payload);


  } catch (error) {
    yield put({
      type: types.USERS_SET_FETCHING_ERROR,
      payload: error,
    });
  } finally {
    yield put(stopFetching());
  }
}

function* removeUser({ payload }) {
  try {
    yield put(startFetching());
    yield call(api.users.remove, payload);
  } catch (error) {
    yield put({
      type: types.USERS_SET_FETCHING_ERROR,
      payload: error,
    });
  } finally {
    yield put(stopFetching());
  }
}

export function* watchFetchUsers() {
  yield takeEvery(types.USERS_FETCH_ASYNC, fetchUsers)
}

export function* watchCreateUser() {
  yield takeEvery(types.USERS_CREATE_ASYNC, createUser)
}

export function* watchUpdateUser() {
  yield takeEvery(types.USERS_UPDATE_ASYNC, updateUser)
}

export function* watchRemoveUser() {
  yield takeEvery(types.USERS_REMOVE_ASYNC, removeUser)
}

export function* watchUsers()  {
  yield all([call(watchFetchUsers), call(watchCreateUser), call(watchRemoveUser), call(watchUpdateUser)]);
}
