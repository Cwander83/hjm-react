import { useState } from 'react';

export default () => {
	const [visible, setVisible] = useState(false);

	const handleForm = () => setVisible(!visible);
	const closeForm = () => (visible === true ? setVisible(false) : null);

	return { visible, handleForm, closeForm };
};
