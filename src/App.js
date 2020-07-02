import React from 'react';

import ProductNav from './components/ProductNav/ProductNav';
import ProductForm from './components/ProductForm/ProductForm';
import ProductBody from './components/ProductBody/ProductBody';

import './App.css';

function App() {
	const [state, setState] = React.useState('vacuums');

	const handleState = React.useCallback((data) => {
		console.log('handleState');
		setState(data);
	}, []);

	console.log(`state: ${state}`);
	return (
		<div className="App">
			<ProductNav handleState={handleState} />
			<ProductBody state={state} />
			<ProductForm />
		</div>
	);
}

export default App;
