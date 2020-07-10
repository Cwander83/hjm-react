import React from 'react';

import { CartContext } from '../../../context/cart-context';

const Cart = () => (
	<CartContext.Consumer>
		{(context) => (
			<React.Fragment>
				{context.products.map((product, i) => (
					<li key={i}>
						<p>{product}</p>
					</li>
				))}
			</React.Fragment>
		)}
	</CartContext.Consumer>
);

export default Cart;
