import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
	name: Yup.mixed()
		.required('Task title field is required'),
	surname: Yup.mixed()
		.required('Task tag field is required'),
	desc: Yup.mixed()
		.required('Task text field is required'),
});
