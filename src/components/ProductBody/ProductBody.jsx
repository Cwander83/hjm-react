import React from 'react';

import './ProductBody.css';

import bissell from '../../data/bissell.js';

import Products from './Products/Products';

const ProductBody = React.memo(({ state }) => {
	const [category, setCategory] = React.useState();

	React.useEffect(() => {
		setCategory(state);
	}, [state]);

	//console.log(`navigation rendered and state is ${category}`);

	// console.log(typeof category);
	//console.log(`${JSON.stringify(bissell[category])}`);
	return (
		<div className="product-body">
			<Products data={bissell[category]} />
		</div>
	);
});

export default ProductBody;
