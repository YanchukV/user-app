import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import cx from 'classnames';
import { Button } from 'reactstrap';

import Styles from './index.module.scss';
import { useUsers } from '../../hooks/useUsers';
import { CustomField } from '../../elements/CustomField';
import { userSchema } from './user.schema';

export const UserAddTable = () => {
	const [counter, addCounter] = useState(1);
	const { users, selectedUser, createUser, updateUser } = useUsers();

	const userId = users[users.length - 1]?.id;

	const initialValues = selectedUser[0] || {
		id: null,
		name: '',
		surname: '',
		desc: '',
	};

	const cardCX = cx({
		[Styles.root]: true,
	});

	return (
		<div className={cardCX}>
			<Formik
				initialValues={initialValues}
				enableReinitialize='true'
				validationSchema={userSchema}
				onSubmit={(values, { resetForm }) => {
					addCounter(counter + 1);
					values.id = initialValues.id ? initialValues.id : userId ? (userId + 1) : counter;
					if (selectedUser[0]) {
						updateUser(values);
					} else {
						createUser(values);
					}
					if (!initialValues.id) {
						resetForm(initialValues);
					}
				}}>
				{({ handleSubmit }) => {
					return (
						<Form onSubmit={handleSubmit}>
							<div className={Styles.content}>
								<div className={Styles.name}>
									<CustomField
										classFormGroup={Styles.formGroup}
										classFormFeedback={Styles.formFeedback}
										type='text'
										name='name'
										id='name'
										label='Name'
										placeholder='User name'
									/>
								</div>
								<div className={Styles.surname}>
									<CustomField
										classFormGroup={Styles.formGroup}
										classFormFeedback={Styles.formFeedback}
										type='text'
										name='surname'
										id='surname'
										label='Surname'
										placeholder='User surname'
									/>
								</div>
								<div className={Styles.desc}>
									<CustomField
										classFormGroup={Styles.formGroup}
										classFormFeedback={Styles.formFeedback}
										type='input'
										name='desc'
										id='desc'
										label='Description'
										placeholder='User description'
									/>
								</div>
								<div className={Styles.buttons}>
									<Button className={Styles.btnSubmit} type='submit' color='success'>Save</Button>
								</div>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};
