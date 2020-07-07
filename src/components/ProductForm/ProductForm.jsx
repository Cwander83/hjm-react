import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './ProductForm.css';

const ProductForm = React.memo(({ model }) => {
	const { register, handleSubmit, errors } = useForm();

	const [inputs, setInputs] = useState({
		name: '',
		phone: '',
		email: '',
		model: model,
		message: '',
	});

	console.log(`inputs: ${inputs.model}`);
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
				model: model,
				message: '',
			});
		}
	};
	const handleOnSubmit = (event) => {
		// event.preventDefault();
		setServerState({ submitting: true });
		axios({
			method: 'POST',
			url: 'https://formspree.io/chriswandermail@gmail.com',
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
		<div className="form-container">
			<div className="form-col-1">
				<h3>thank you for your interest in the {model}</h3>
				<img
					className="form-product-image"
					src={require(`./../../images/${model}.jpg`)}
					alt={model}
				/>
			</div>
			<div className="form-col-2">
				<h3>send in request and we'll contact you</h3>
				<form className="product-form" onSubmit={handleSubmit(handleOnSubmit)}>
					<input
						id="name"
						type="text"
						name="name"
						onChange={handleOnChange}
						value={inputs.name}
						placeholder="name"
						ref={register({
							required: 'Required',
							min: 2,
							maxLength: 20,
						})}
					/>
					<span className="error-message">
						{errors.name && errors.name.message}
					</span>

					<input
						id="email"
						type="email"
						name="email"
						onChange={handleOnChange}
						value={inputs.email}
						placeholder="email"
						ref={register({
							required: 'Required',
							pattern: /^\S+@\S+$/i,
						})}
					/>
					<span className="error-message">
						{errors.email && errors.email.message}
					</span>

					<input
						id="phone"
						type="phone"
						name="phone"
						onChange={handleOnChange}
						value={inputs.phone}
						placeholder="phone number"
						ref={register({
							required: 'Invalid US Phone Number.',
							maxLength: 12,
							pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
						})}
					/>
					<span className="error-message">
						{errors.phone?.type === 'pattern' &&
							'Please enter valid US Phone Number.'}
					</span>

					<input
						id="message"
						name="message"
						onChange={handleOnChange}
						value={inputs.message}
						placeholder="message"
					/>
					<button
						className="product-form-btn"
						type="submit"
						disabled={serverState.submitting}
					>
						Submit
					</button>

					{serverState.status && (
						<p className={!serverState.status.ok ? 'errorMsg' : ''}>
							{serverState.status.msg}
						</p>
					)}
				</form>
			</div>
		</div>
	);
});

export default ProductForm;
