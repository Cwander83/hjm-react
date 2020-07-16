import React from 'react';

import './ProductBody.css';

import bissell from '../../data/bissell.js';

import Products from './Products/Products';

import { CategoryContext } from '../../context/category-context';
import { FormContext } from '../../context/form-context';

import ProductForm from '../ProductForm/ProductForm';
import CartIcon from '../../ui/CartIcon/CartIcon';

const ProductBody = React.memo(() => {
	const { category } = React.useContext(CategoryContext);
	const { form } = React.useContext(FormContext);

	const [currentCategory, setCurrentCategory] = React.useState();

	React.useEffect(() => {
		setCurrentCategory(category);
	}, [category, form]);

	console.log(`body form: ${form}`);

	return (
		<div className="product-body">
			<CartIcon />
			{!form ? <Products data={bissell[currentCategory]} /> : <ProductForm />}
		</div>
	);
});

export default ProductBody;
