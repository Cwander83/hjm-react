import React from 'react';

import './Products.css';

const Products = ({ data }) => {
	console.log(`product rendered`);
	//console.log(JSON.stringify(data));

	return (
		<React.Fragment>
			{data &&
				Object.keys(data).map((obj, i) => (
					<div className="product" key={i}>
						<img className="product-image" src={require(`../../../images/${data[obj].model}.jpg`)} alt={data[obj].model} />
						<p className="input-label">
							{data[obj].model}
						</p>
					</div>
				))}
		</React.Fragment>
	);
};

export default Products;
