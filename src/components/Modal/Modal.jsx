import React from 'react';

import Modal from 'react-modal';

import { CartConsumer } from '../../context/cart-context';

import './Modal.css';

Modal.setAppElement('#ModalElement');

const ProductModal = React.memo(({ open, closeModal, product }) => {
	return (
		<div>
			<Modal
				isOpen={open}
				onRequestClose={closeModal}
				//style={customStyles}
				overlayClassName="Overlay"
				contentLabel="HJM Modal"
				className="Modal"
			>
				<span
					className="modal-close-btn"
					onClick={
						closeModal
						// resets the form to false in case user goes back
					}
				>
					<i className="far fa-window-close"></i>
				</span>

				{product &&
					Object.keys(product).map((obj, i) => {
						let currentProduct = product[obj];

						return (
							<div className="modal-product-body" key={i}>
								<div className="product-col-1">
									<img
										key={currentProduct.id}
										className="modal-product-image"
										src={require(`./../../images/${currentProduct.model}.jpg`)}
										alt={currentProduct.model}
									/>
								</div>
								<div className="product-col-2">
									<div className="modal-product-title">
										<h3 className="modal-product-title-header">
											{!currentProduct.name
												? currentProduct.model
												: currentProduct.name}
										</h3>
										<CartConsumer>
											{({ addProducts }) => (
												<button
													onClick={() => {
														closeModal();
														addProducts(currentProduct.model);
													}}
													className="modal-form-link"
												>
													<p>
														<i className="fas fa-cart-plus"></i>
														ADD TO CART
													</p>
												</button>
											)}
										</CartConsumer>
									</div>
									<ul className="modal-list">
										<li>
											<h4 className="modal-list-title">Features</h4>
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
														closeModal();
														addProducts(currentProduct.model);
													}}
													className="modal-form-link-1024"
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
			</Modal>
		</div>
	);
});

export default ProductModal;
