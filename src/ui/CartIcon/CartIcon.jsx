import React, { useContext } from 'react';

import './CartIcon.css';
import { CartContext } from '../../context/cart-context';
import { FormContext } from '../../context/form-context';
import { ActiveContext } from '../../context/active-context';

const CartIcon = () => {
	const { products } = useContext(CartContext);
	const { closeActiveHandler } = useContext(ActiveContext);
	const { form, formHandler, closeFormHandler } = React.useContext(FormContext);

	return (
		<>
			{!form ? (
				<span className="cart-icon">
					<p onClick={formHandler}>
						<i className="fas fa-shopping-cart"></i> Cart ({products.length})
					</p>
				</span>
			) : (
				<span className="cart-icon">
					<p
						onClick={() => {
							closeActiveHandler();
							closeFormHandler();
						}}
					>
						Go Back
					</p>
				</span>
			)}
		</>
	);
};

export default CartIcon;
