import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import moment from 'moment';
import Swal from 'sweetalert2';

import './ProductForm.css';

import { CartContext } from '../../context/cart-context';
import RemoveButton from '../../ui/RemoveButton/RemoveButton';

const ProductForm = React.memo(() => {
	const { products } = React.useContext(CartContext);

	const { register, handleSubmit, errors, reset } = useForm();

	const [decisionBtn, setDecisionBtn] = useState(false);
	const [currentProduct, setCurrentProduct] = useState(null);

	const decisionHandler = () => setDecisionBtn(!decisionBtn);

	const handleOnSubmit = (data, event) => {
		
		event.preventDefault();
		data['models'] = products;
		data['date'] = moment().format('MMMM Do YYYY, h:mm:ss a');

		// console.log(`data: ${data}`);

		axios({
			method: 'POST',
			url: 'https://formspree.io/Hjmjanitorialservice@gmail.com',
			data: data,
		})
			.then(() => {
				Swal.fire({
					icon: 'success',
					title: 'Request Submitted',
					text: "We'll be contacting you shortly!",
				});
			})
			.catch(() => {
				Swal.fire({
					icon: 'error',
					title: 'Oops..',
					text: 'Something went wrong!',
					footer:
						'Please call &nbsp;<a href="tel:14077774393"> 407-777-4393</a>',
				});
			});

		event.target.reset();
	};

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
						placeholder="message"
						ref={register}
					/>
					<button className="product-form-btn" type="submit">
						<i className="far fa-paper-plane"></i>
						<h3>submit form</h3>
					</button>
					<p className="reset-btn" type="reset" onClick={reset}>
						clear form
					</p>
				</form>
			</div>
		</div>
	);
});

export default ProductForm;
