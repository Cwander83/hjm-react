import React from 'react';

import './Cart.css';

import { CartConsumer } from '../../../context/cart-context';
import RemoveButton from '../../../ui/RemoveButton/RemoveButton';
//import RemoveButton from '../../../ui/RemoveButton/RemoveButton';

const ProductNavCart = () => {
	const [decisionBtn, setDecisionBtn] = React.useState(false);
	const [product, setProduct] = React.useState(null);

	const decisionHandler = () => setDecisionBtn(!decisionBtn);

	return (
		<div>
			{!decisionBtn ? (
				<CartConsumer>
					{({ products }) => (
						<React.Fragment>
							{products.length === 0 ? (
								<li className="nav-cart-li">
									<h3 className="cart-model-title cart-empty">Your cart is currently empty.</h3>
								</li>
							) : (
								products.map((product, i) => (
									<li className="nav-cart-li" key={i}>
										<h3 className="cart-model-title">{product}</h3>
										<span
											className="cart-remove-icon"
											onClick={() => {
												decisionHandler();
												setProduct(product);
											}}
										>
											<i className="fas fa-times"></i>
										</span>
									</li>
								))
							)}
						</React.Fragment>
					)}
				</CartConsumer>
			) : (
				<RemoveButton product={product} decision={decisionHandler} />
			)}
		</div>
	);
};
export default ProductNavCart;
