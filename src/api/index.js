import { root } from './config';
import axios from 'axios';

export const api = Object.freeze({
	users: {
		fetch: () => axios.get(`${root}/users/`),
		remove: (id) => axios.delete(`${root}/user/${id}`),
		create: (payload) => axios.post(`${root}/users`,payload),
		update: (id, payload) => axios.put(`${root}/user/${id}`,payload)
	}
});

