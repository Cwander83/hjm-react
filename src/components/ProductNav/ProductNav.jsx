import React from 'react';

import './ProductNav.css';

// import { CartContext } from '../../context/cart-context';
import Cart from './Cart/Cart';
import { CategoryConsumer } from '../../context/category-context';
import MobileNav from './MobileNav/MobileNav';
import { FormContext } from '../../context/form-context';
//import MobileNav from './MobileNav/MobileNav';

const ProductNav = React.memo(() => {
	const { form, formHandler, closeFormHandler } = React.useContext(FormContext);
	const productValues = [
		{ id: 10, value: 'uprightVacuums', name: 'Upright Vacuums' },
		{ id: 11, value: 'canisterVacuums', name: 'Canister Vacuums' },
		{ id: 12, value: 'backpackVacuums', name: 'Backpack Vacuums' },
		{ id: 13, value: 'extraWideVacuums', name: 'Extra Wide Vacuums' },
		{ id: 14, value: 'powerSweepers', name: 'Power Sweepers' },
		{ id: 15, value: 'extractors', name: 'Extractors' },
		{ id: 16, value: 'floorMachines', name: 'Floor Machines' },
		{ id: 17, value: 'steamMachines', name: 'Steam Machines' },
		{ id: 18, value: 'airMovers', name: 'Air Movers' },
		{ id: 19, value: 'cleaning', name: 'Cleaning formula / Accessories' },
	];

	const [activeBtn, setActiveBtn] = React.useState(10);

	// const [width, setWidth] = React.useState(null);

	// React.useEffect(() => {
	// 	setWidth(window.innerWidth);
	// }, [width]);

	// console.log(`width: ${width}`);

	React.useEffect(() => () => {}, [activeBtn]);

	return (
		<CategoryConsumer>
			{({ categoryFunc }) => (
				<>
					<div className="product-navigator">
						<ul className="equipment-navigation">
							<li>
								<h2 className="equipment-nav-header">Products</h2>
							</li>
							{productValues &&
								productValues.map((button, index) => {
									return (
										<li key={button.id}>
											<button
												className={`product-btn ${
													activeBtn === button.id ? 'active-btn' : ''
												}`}
												value={button.value}
												onClick={() => {
													const passingValue = button.value;
													setActiveBtn(button.id);
													closeFormHandler();
													categoryFunc(passingValue);
												}}
											>
												{button.name}
											</button>
										</li>
									);
								})}

							<li className="products-nav-form-section">
								<button disabled={form} onClick={formHandler}>
									<i className="far fa-envelope"></i>
									<p className="btn-p">request form</p>
								</button>
							</li>
							<li className="products-nav-form-section">
								<h2 className="cart-title">products to purchase:</h2>
							</li>
							<Cart />
						</ul>
					</div>

					<MobileNav productValues={productValues} />
				</>
			)}
		</CategoryConsumer>
	);
});

export default ProductNav;
