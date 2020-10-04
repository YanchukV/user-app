import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger({
	duration: true,
	collapsed: true,
	colors: {
		title: (action) => (action.error ? 'firebrick' : 'deepskyblue'),
		prevState: () => '#1C5FAF',
		action: () => '#149945',
		nextState: () => '#A47104',
		error: () => '#ff0005',
	},
});

export const sagaMiddleware = createSagaMiddleware();

export const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const middleware = compose(applyMiddleware(...middlewares));
