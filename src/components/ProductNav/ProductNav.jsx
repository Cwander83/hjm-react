import React from 'react';

import './ProductNav.css';

const ProductNav = React.memo(({ handleState }) => {
	console.log(`navigation rendered`);
	const productValues = [
		{ id: 0, value: 'uprightVacuums', name: 'Upright Vacuums' },
		{ id: 0, value: 'canisterVacuums', name: 'Canister Vacuums' },
		{ id: 0, value: 'backpackVacuums', name: 'Backpack Vacuums' },
		{ id: 0, value: 'extraWideVacuums', name: 'Extra Wide Vacuums' },
		{ id: 1, value: 'powerSweepers', name: 'Power Sweepers' },
		{ id: 2, value: 'extractors', name: 'Extractors' },
		{ id: 3, value: 'floorMachines', name: 'Floor Machines' },
		{ id: 4, value: 'steamMachines', name: 'Steam Machines' },
		{ id: 5, value: 'airMovers', name: 'Air Movers' },
		{ id: 6, value: 'cleaning', name: 'Cleaning formula / Accessories' },
	];
	const [activeBtn, setActiveBtn] = React.useState(null);

	return (
		<div className="product-navigator">
			<ul className="equipment-navigation">
				<li>
					<h2 className="equipment-nav-header">Products</h2>
				</li>
				{productValues &&
					productValues.map((button, index) => {
						return (
							<li key={index}>
								<button
									className={`product-btn ${
										activeBtn === index ? 'active-btn' : ''
									}`}
									value={button.value}
									onClick={() => {
										const passingValue = button.value;
										setActiveBtn(index);
										handleState(passingValue);
									}}
								>
									{button.name}
								</button>
							</li>
						);
					})}
			</ul>
		</div>
	);
});

export default ProductNav;
