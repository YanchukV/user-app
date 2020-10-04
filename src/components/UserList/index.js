import React, { useState } from 'react';
import { Spinner } from 'reactstrap';

import Style from './index.module.scss';
import { useUsers } from '../../hooks/useUsers';
import { Button, Table } from 'reactstrap';
import { UserPagination } from '../UserPagination';

export const UserList = () => {

	const { removeUser, editUser } = useUsers();
	const { isFetching, error, users } = useUsers();
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(5);

	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = users && users.slice(indexOfFirstUser, indexOfLastUser);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	const loadSpinner = isFetching && <Spinner color='primary' className={Style.spinner} />;
	const errorMessage = error && <p>Some problems with the server!</p>;

	const usersJSX = users && currentUsers.map(({ id, name, surname, desc }) => {
		return <tr key={id} id={id}>
			<td>{id}</td>
			<td>{name}</td>
			<td>{surname}</td>
			<td>{desc}</td>
			<td><Button color='primary' onClick={() => editUser(id)}>Edit</Button></td>
			<td><Button color='danger' onClick={() => removeUser(id)}>Remove</Button></td>
		</tr>;
	});

	return (
		<div className={Style.list}>
			<Table>
				<thead>
				<tr>
					<th>UserId</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Description</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>
				</thead>
				<tbody>
				{errorMessage}
				{loadSpinner}
				{!error && usersJSX}
				</tbody>
			</Table>

			<UserPagination
				usersPerPage={usersPerPage}
				allUsers={users.length}
				paginate={paginate}
			/>
		</div>
	);
};
