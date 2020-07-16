import React, { useContext } from 'react';

import { CartConsumer } from '../../../context/cart-context';
import { ActiveContext } from '../../../context/active-context';
import './ActiveProduct.css';


const ActiveProduct = React.memo(({ product}) => {
    const { activeHandler} =useContext(ActiveContext)
	return (
		<div>
			{product &&
				Object.keys(product).map((obj, i) => {
					let currentProduct = product[obj];

					return (
						<div className="active-product-body" key={i}>
							<div className="active-product-row-1">
								<h3 onClick={activeHandler}><i className="far fa-arrow-alt-circle-left"></i> Go Back</h3>
								<div className="product" key={currentProduct.id}>
									<img
										className="product-image"
										src={require(`../../../images/${currentProduct.model}.jpg`)}
										alt={currentProduct.model}
									/>
									<p className="product-title">
										{!currentProduct.name
											? currentProduct.model
											: currentProduct.name}
									</p>
								</div>
							</div>
							<div className="active-product-row-2">
								<ul className="active-list">
									<li>
										<h4 className="active-list-title">Features</h4>
									</li>
									{currentProduct.features.map((feature, index) => (
										<li key={index}>
											<p>&#8226; {feature}</p>
										</li>
									))}
								</ul>
								<CartConsumer>
									{({ addProducts }) => (
										<button
											onClick={() => {
												addProducts(currentProduct.model);
												activeHandler();
											}}
											className="active-form-link"
										>
											<p>
												<i className="fas fa-cart-plus"></i>
												ADD TO CART
											</p>
										</button>
									)}
								</CartConsumer>
							</div>
						</div>
					);
				})}
		</div>
	);
});

export default ActiveProduct;
