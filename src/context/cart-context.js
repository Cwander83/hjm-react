import React from 'react';

// store default value
export const CartContext = React.createContext({
	products: [],
	addProducts: () => {},
	removeProduct: () => {},
});

// Provider
const CartContextProvider = (props) => {
	const [products, setProducts] = React.useState([]);

	// add to products array
	const addProductsHandler = (product) => setProducts(products.concat(product));

	// remove a product
	const removeProductHandler = (product) => {
		// set var index to first index of item to be deleted
		let index = products.indexOf(product);

		setProducts(products.filter((_, i) => i !== index));
	};

	return (
		<CartContext.Provider
			value={{
				addProducts: addProductsHandler,
				removeProduct: removeProductHandler,
				products: products,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;

// consumer
export const CartConsumer = CartContext.Consumer;
