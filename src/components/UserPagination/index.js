import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export const UserPagination = ({ usersPerPage, allUsers, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(allUsers / usersPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<Pagination>
			{pageNumbers.map(number => (
				<PaginationItem key={number}>
					<PaginationLink href='#' onClick={() => paginate(number)}>
						{number}
					</PaginationLink>
				</PaginationItem>
			))}
		</Pagination>
	);
};

