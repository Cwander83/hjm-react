import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './ProductForm.css';

const ProductForm = ({model}) => {
	const [modalState, setModalState]= useState()
	/* NEW: Input state handling vvvv */
	const [inputs, setInputs] = useState({
		name: '',
		phone: '',
		email: '',
		model: '',
		message: ''
	});

	useEffect(() => {
		setModalState()
	}, [input])
	const handleOnChange = (event) => {
		event.persist();
		setInputs((prev) => ({
			...prev,
			[event.target.id]: event.target.value,
		}));
	};
	/* End input state handling ^^^^ */

	// Server state handling
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null,
	});
	const handleServerResponse = (ok, msg) => {
		setServerState({
			submitting: false,
			status: { ok, msg },
		});
		if (ok) {
			setInputs({
				name: '',
				phone: '',
				email: '',
				model: '',
				message: '',
			});
		}
	};
	const handleOnSubmit = (event) => {
		event.preventDefault();
		setServerState({ submitting: true });
		axios({
			method: 'POST',
			url: 'https://formspree.io/YOUR_EMAIL_HERE',
			data: inputs,
		})
			.then((r) => {
				handleServerResponse(true, 'Thanks!');
			})
			.catch((r) => {
				handleServerResponse(false, r.response.data.error);
			});
	};

	return (
		<div>
			<h1>Contact Us</h1>
			<form onSubmit={handleOnSubmit}>
				<label htmlFor='name'>name:</label>
				<input
					id='name'
					type='name'
					name='name'
					required
					onChange={handleOnChange}
					value={inputs.email}
				/>
				<label htmlFor='email'>Email:</label>
				<input
					id='email'
					type='email'
					name='email'
					required
					onChange={handleOnChange}
					value={inputs.email}
				/>
				<label htmlFor='phone'>phone:</label>
				<input
					id='phone'
					type='phone'
					name='phone'
					required
					onChange={handleOnChange}
					value={inputs.email}
				/>
				<label htmlFor='message'>Message:</label>
				<textarea
					id='message'
					name='message'
					onChange={handleOnChange}
					value={inputs.message}
				></textarea>
				<button type='submit' disabled={serverState.submitting}>
					Submit
				</button>
				{serverState.status && (
					<p className={!serverState.status.ok ? 'errorMsg' : ''}>
						{serverState.status.msg}
					</p>
				)}
			</form>
		</div>
	);
};

export default ProductForm;
