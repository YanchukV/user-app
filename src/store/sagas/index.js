import { all, call } from 'redux-saga/effects';

import { watchUsers } from './users.saga';

export function* rootSaga() {
	yield all([call(watchUsers)]);
}
