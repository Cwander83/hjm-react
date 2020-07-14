import React from 'react';

import './ProductBody.css';

import bissell from '../../data/bissell.js';

import Products from './Products/Products';

import { CategoryContext } from '../../context/category-context';

import ProductForm from '../ProductForm/ProductForm';
import CartIcon from '../../ui/CartIcon/CartIcon';

const ProductBody = React.memo(({ visible, closeForm }) => {
	const { category } = React.useContext(CategoryContext);
	const [currentCategory, setCurrentCategory] = React.useState();

	React.useEffect(() => {
		setCurrentCategory(category);
	}, [category]);

	return (
		<div className="product-body">
			<CartIcon />
			{!visible ? (
				<Products data={bissell[currentCategory]} />
			) : (
				<ProductForm closeForm={closeForm} />
			)}
		</div>
	);
});

export default ProductBody;
