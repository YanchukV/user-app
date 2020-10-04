import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { useField } from 'formik';

export const CustomField = ({ label, classFormGroup, classFormFeedback, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<FormGroup className={classFormGroup}>
			<Label for={meta.id}>{label}</Label>
			<Input {...field} {...props} />
			{meta.touched && meta.error && <FormFeedback className={classFormFeedback}>{meta.error}</FormFeedback>}
		</FormGroup>
	);
};
