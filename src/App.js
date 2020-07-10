import React from 'react';

import ProductNav from './components/ProductNav/ProductNav';

import ProductBody from './components/ProductBody/ProductBody';

import './App.css';
import CartContextProvider from './context/cart-provider';

function App() {
	const [state, setState] = React.useState('uprightVacuums');

	const handleState = React.useCallback((data) => {
		console.log('handleState');
		setState(data);
	}, []);

	console.log(`state: ${state}`);
	return (
		<CartContextProvider>
			<div className="App">
				<ProductNav handleState={handleState} />
				<ProductBody state={state} />
			</div>
		</CartContextProvider>
	);
}

export default App;
