import React from 'react';

import ProductNav from './components/ProductNav/ProductNav';
import ProductBody from './components/ProductBody/ProductBody';

//CSS
import './App.css';

// import provider for context
import CartContextProvider from './context/cart-context';
import CategoryProvider from './context/category-context';
import ActiveProvider from './context/active-context';
import FormProvider from './context/form-context';

function App() {
	return (
		<CartContextProvider>
			<CategoryProvider>
				<ActiveProvider>
					<FormProvider>
						<div className="App">
							<ProductNav />
							<ProductBody />
						</div>
					</FormProvider>
				</ActiveProvider>
			</CategoryProvider>
		</CartContextProvider>
	);
}

export default App;
