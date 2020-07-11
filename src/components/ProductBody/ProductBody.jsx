import React from 'react';

import './ProductBody.css';

import bissell from '../../data/bissell.js';

import Products from './Products/Products';

import { CategoryContext } from '../../context/category-context';

import ProductForm from '../ProductForm/ProductForm';

const ProductBody = React.memo(({ visible, closeForm }) => {
	const { category } = React.useContext(CategoryContext);
	const [currentCategory, setCurrentCategory] = React.useState();

	React.useEffect(() => {
		setCurrentCategory(category);
	}, [category]);
	console.log(`body visible: ${visible}`);
	return (
		<div className="product-body">
			{!visible ? (
				<Products data={bissell[currentCategory]} />
			) : (
				<>
					<button onClick={closeForm}></button>
					<ProductForm closeForm={closeForm}/>
				</>
			)}
		</div>
	);
});

export default ProductBody;
