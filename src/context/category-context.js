import React from 'react';

export const CategoryContext = React.createContext({
	category: 'uprightVacuums',
	categoryFunc: () => {},
});

// Provider
const CategoryProvider = (props) => {
	const [category, setCategory] = React.useState('uprightVacuums');

	const categoryHandler = (value) => {
		setCategory(value);
	};

	console.log(`context category: ${category}`);
	return (
		<CategoryContext.Provider
			value={{ categoryFunc: categoryHandler, category: category }}
		>
			{props.children}
		</CategoryContext.Provider>
	);
};

export default CategoryProvider;

// consumer
export const CategoryConsumer = CategoryContext.Consumer;
