import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	fetchAsync,
	createUserAsync,
	removeUserAsync,
	editUserAsync,
	updateUserAsync,
} from '../store/actions/users.actions';

export const useUsers = () => {

	const dispatch = useDispatch();
	const usersState = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(fetchAsync());
	}, [dispatch]);

	const createUser = user => {
		dispatch(createUserAsync(user));
	};

	const removeUser = id => {
		dispatch(removeUserAsync(id));
	};

	const updateUser = (payload) => {
		dispatch(updateUserAsync(payload));
	};

	const editUser = id => {
		dispatch(editUserAsync(id));
	};

	return {
		...usersState,
		createUser,
		removeUser,
		updateUser,
		editUser,
	};
};
