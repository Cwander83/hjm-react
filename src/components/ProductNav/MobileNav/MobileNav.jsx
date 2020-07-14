import React from 'react';

import { CategoryConsumer } from '../../../context/category-context';

import './MobileNav.css';



const MobileNav = ({ handleForm, closeForm, productValues }) => {
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
												closeForm();
												listHandler();
												setActiveBtn(button.id);
												categoryFunc(passingValue);
											}}
										>
											{button.name}
										</button>
									</li>
								);
							})}

						{/* <li>
							<button
								className="product-btn mobile-form-btn"
								onClick={() => {
									handleForm();
									listHandler();
								}}
							>
								<i className="far fa-envelope"></i>
								<p className="btn-p">request form</p>
							</button>
						</li> */}
					</ul>
				</div>
			)}
		</CategoryConsumer>
	);
};

export default MobileNav;
