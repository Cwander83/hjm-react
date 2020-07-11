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
	const removeProductHandler = (product) =>
		setProducts(products.filter((item) => item !== product));

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
