import React, { useContext } from 'react';

import { CartContext } from '../../context/cart-context';

import './RemoveButton.css';

const RemoveButton = ({ product, decision }) => {
	const { removeProduct } = useContext(CartContext);
	return (
		<div className="remove-section">
			<li >
				<p>Are You Sure?</p>
				<p>Remove {product} </p>
				<button
					className="remove-buttons"
					onClick={() => {
						removeProduct(product);
						decision();
					}}
				>
					YES
				</button>
				<button className="remove-buttons" onClick={decision}>
					NO
				</button>
			</li>
		</div>
	);
};

export default RemoveButton;
