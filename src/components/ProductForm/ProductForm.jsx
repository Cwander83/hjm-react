import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './ProductForm.css';

import { CartContext } from '../../context/cart-context';
import RemoveButton from '../../ui/RemoveButton/RemoveButton';

const ProductForm = React.memo(() => {
	const { products } = React.useContext(CartContext);

	const { register, handleSubmit, errors } = useForm();

	const [decisionBtn, setDecisionBtn] = useState(false);
	const [currentProduct, setCurrentProduct] = useState(null);

	const decisionHandler = () => setDecisionBtn(!decisionBtn);

	// const [inputs, setInputs] = useState({
	// 	name: '',
	// 	phone: '',
	// 	email: '',
	// 	products: products,
	// 	message: '',
	// });

	// console.log(`inputs: ${inputs.model}`);
	// const handleOnChange = (event) => {
	// 	event.persist();
	// 	setInputs((prev) => ({
	// 		...prev,
	// 		[event.target.id]: event.target.value,
	// 	}));
	// };
	/* End input state handling ^^^^ */

	// Server state handling
	// const [serverState, setServerState] = useState({
	// 	submitting: false,
	// 	status: null,
	// });
	// const handleServerResponse = (ok, msg) => {
	// 	setServerState({
	// 		submitting: false,
	// 		status: { ok, msg },
	// 	});
	// 	if (ok) {
	// 		setInputs({
	// 			name: '',
	// 			phone: '',
	// 			email: '',
	// 			products: products,
	// 			message: '',
	// 		});
	// 	}
	// };
	const handleOnSubmit = (data, event) => {
		event.preventDefault();
		data['models'] = products;
		console.log(data);
		//console.log(data, event);
		//setServerState({ submitting: true });
		axios({
			method: 'POST',
			url: 'https://formspree.io/chriswandermail@gmail.com',
			data: data,
		});
		// .then((r) => {
		// 	handleServerResponse(true, 'Thanks!');
		// })
		// .catch((r) => {
		// 	handleServerResponse(false, r.response.data.error);
		// });
	};

	// React.useEffect(() => {
	// 	return () => {};
	// }, [inputs, serverState, products]);

	return (
		<div className="form-container">
			<div className="form-row-1">
				<h3>Thank You for Your Interest in:</h3>
				{!decisionBtn ? (
					<ul>
						{products.map((product, index) => (
							<li key={index}>
								<img
									className="form-product-image"
									src={require(`./../../images/${product}.jpg`)}
									alt={product}
								/>
								<p>{product}</p>
								<span
									className="cart-remove-icon"
									onClick={() => {
										decisionHandler();
										setCurrentProduct(product);
									}}
								>
									<i className="fas fa-times"></i>
								</span>
							</li>
						))}
					</ul>
				) : (
					<RemoveButton product={currentProduct} decision={decisionHandler} />
				)}
			</div>
			<div className="form-row-2">
				<h3>Send in Request and We'll Contact You</h3>
				<form className="product-form" onSubmit={handleSubmit(handleOnSubmit)}>
					<input
						id="name"
						type="text"
						name="name"
						// value={inputs.name}
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
						// value={inputs.email}
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
						// value={inputs.phone}
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
						type="text"
						// value={inputs.message}
						placeholder="message"
						ref={register}
					/>
					<span
						className="product-form-btn"
						type="submit"
						//disabled={serverState.submitting}
					>
						<i className="far fa-paper-plane"></i>
						<h3>submit form</h3>
					</span>

					{/* {serverState.status && (
						<p className={!serverState.status.ok ? 'errorMsg' : ''}>
							{serverState.status.msg}
						</p>
					)} */}
				</form>
			</div>
		</div>
	);
});

export default ProductForm;
