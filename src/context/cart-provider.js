import React from 'react';

import CartContext from './cart-context';

const CartContextProvider = (props) => {
	const [products, setProducts] = React.useState([]);

	const addProductsHandler = () => {
		setProducts();
	};

	return (
		<CartContext.Provider
			value={{ addProducts: addProductsHandler, products: products }}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
