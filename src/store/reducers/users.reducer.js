import { types } from '../types';

const initialState = {
	users: [],
	isFetching: false,
	error: null,
	selectedUser: [],
};

export const usersReducer = (state = initialState, { payload, type }) => {
	switch (type) {
		case types.USERS_CREATE_ASYNC:
			return {
				...state,
				users: [...state.users, payload],
			};
		case types.USERS_UPDATE_ASYNC:
			return {
				...state,
				selectedUser: [],
				users: [...state.users.map(item => item.id !== payload.id ? item : payload)],
			};
		case types.USERS_EDIT_ASYNC:
			return {
				...state,
				selectedUser: [...state.users.filter(item => item.id === payload)],
			};
		case types.USERS_REMOVE_ASYNC:
			return {
				...state,
				users: [...state.users.filter(item => item.id !== payload)],
				selectedUser: [],
			};
		case types.USERS_START_FETCHING:
			return {
				...state,
				isFetching: true,
			};
		case types.USERS_STOP_FETCHING:
			return {
				...state,
				isFetching: false,
			};
		case types.USERS_FILL:
			return {
				...state,
				users: payload,
			};
		default:
			return state;
	}
};
