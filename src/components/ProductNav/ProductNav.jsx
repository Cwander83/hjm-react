import React from 'react';

import './ProductNav.css';

// import { CartContext } from '../../context/cart-context';
import Cart from './Cart/Cart';
import { CategoryConsumer } from '../../context/category-context';

const ProductNav = React.memo(({ visible, handleForm, closeForm }) => {
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

	React.useEffect(() => () => {}, [activeBtn]);

	return (
		<CategoryConsumer>
			{({ categoryFunc }) => (
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
												closeForm();
												categoryFunc(passingValue);
											}}
										>
											{button.name}
										</button>
									</li>
								);
							})}

						<li className="products-nav-form-section">
							<button disabled={visible} onClick={() => handleForm()}>
								click here for request form
							</button>
						</li>
						<li className="products-nav-form-section">
							<h2 className="cart">products to purchase:</h2>
						</li>
						<Cart />
					</ul>
				</div>
			)}
		</CategoryConsumer>
	);
});

export default ProductNav;
