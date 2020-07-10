import React from 'react';


 const CartContext = React.createContext({
	products: [],
	addProducts: () => {},
});

export default CartContext;