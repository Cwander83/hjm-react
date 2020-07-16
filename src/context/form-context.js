import React from 'react';

export const FormContext = React.createContext({
	form: null,
	formHandler: () => {},
	closeFormHandler: () => {},
});

// Provider
const FormProvider = (props) => {
	const [form, setForm] = React.useState(false);

	const formHandler = () => setForm(true);
	const closeFormHandler = () => {
        if (form) setForm(false)};

	return (
		<FormContext.Provider
			value={{
				formHandler: formHandler,
				closeFormHandler: closeFormHandler,
				form: form,
			}}
		>
			{props.children}
		</FormContext.Provider>
	);
};

export default FormProvider;

// consumer
export const FormConsumer = FormContext.Consumer;
