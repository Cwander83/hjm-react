import React from 'react';

import ProductNav from './components/ProductNav/ProductNav';
import ProductBody from './components/ProductBody/ProductBody';

//CSS
import './App.css';

// import provider for context
import CartContextProvider from './context/cart-context';
import CategoryProvider from './context/category-context';

// custom hook
import useForm from './hooks/useForm';

function App() {
	const { visible, handleForm, closeForm } = useForm();

	return (
		<CartContextProvider>
			<CategoryProvider>
				<div className="App">
					<ProductNav handleForm={handleForm} visible={visible} closeForm={closeForm}/>
					<ProductBody visible={visible} closeForm={closeForm} />
				</div>
			</CategoryProvider>
		</CartContextProvider>
	);
}

export default App;
