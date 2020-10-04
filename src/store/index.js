import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

import {
	sagaMiddleware,
	middleware,
} from './middleware';

export const store = createStore(rootReducer, composeWithDevTools(
	middleware,
));
sagaMiddleware.run(rootSaga);
