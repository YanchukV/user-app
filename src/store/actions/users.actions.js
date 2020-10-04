import { types } from '../types';

export const startFetching = () => {
	return {
		type: types.USERS_START_FETCHING,
	};
};

export const stopFetching = () => {
	return {
		type: types.USERS_STOP_FETCHING,
	};
};

export const setFetchingError = (payload) => {
	return {
		type: types.USERS_SET_FETCHING_ERROR,
		error: true,
		payload,
	};
};

export const fill = (payload) => {
	return {
		type: types.USERS_FILL,
		payload,
	};
};

export const fetchAsync = () => {
	return {
		type: types.USERS_FETCH_ASYNC,
	};
};

export const createUserAsync = (payload) => {
	return {
		type: types.USERS_CREATE_ASYNC,
		payload,
	};
};

export const removeUserAsync = (id) => {
	return {
		type: types.USERS_REMOVE_ASYNC,
		payload: id,
	};
};

export const updateUserAsync = (payload) => {
	return {
		type: types.USERS_UPDATE_ASYNC,
		payload,
	};
};

export const editUserAsync = (id) => {
	return {
		type: types.USERS_EDIT_ASYNC,
		payload: id,
	};
};
