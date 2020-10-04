import React from 'react';

import { UserList } from '../../components/UserList/';
import { UserAddTable } from '../../components/UserAddTable';
import Style from './index.module.scss';

export const PageContainer = () => {

	return (
		<div className={Style.pageLayout}>
			<header className={Style.header}>Users App</header>
			<main className={Style.pageMain}>
				<div className={Style.pageContent}>
					<UserAddTable />
					<UserList />
				</div>
			</main>
			<footer className={Style.footer}>@ Created by Yanchuk</footer>
		</div>
	);
};
