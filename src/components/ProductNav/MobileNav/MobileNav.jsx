import React, { useContext } from 'react';

import './MobileNav.css';

import { ActiveContext } from '../../../context/active-context';
import { FormContext } from '../../../context/form-context';
import { CategoryConsumer } from '../../../context/category-context';

const MobileNav = ({ productValues }) => {
	// context api
	const { closeActiveHandler } = useContext(ActiveContext);
	const { closeFormHandler } = useContext(FormContext);

	// component state
	const [listOpen, setListOpen] = React.useState(false);
	const [activeBtn, setActiveBtn] = React.useState(10);

	const listHandler = () => setListOpen(!listOpen);

	return (
		<CategoryConsumer>
			{({ categoryFunc }) => (
				<div className="wrapper">
					<h3>Products </h3>

					<span onClick={listHandler} className="mobile-list-button">
						<p>menu</p>
						<i
							className={listOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}
						></i>
					</span>

					<ul className={listOpen ? 'mobile-dropdown' : 'mobile-disappear'}>
						{listOpen &&
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
												closeFormHandler();
												listHandler();
												closeActiveHandler();
												setActiveBtn(button.id);
												categoryFunc(passingValue);
											}}
										>
											{button.name}
										</button>
									</li>
								);
							})}
					</ul>
				</div>
			)}
		</CategoryConsumer>
	);
};

export default MobileNav;
