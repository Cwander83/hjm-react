import React, { useState } from 'react';

import Modal from 'react-modal';

import ProductFrom from '../ProductForm/ProductForm';

import './Modal.css';

// const customStyles = {
// 	content: {
// 		top: '50%',
// 		left: '50%',
// 		right: 'auto',
// 		bottom: 'auto',
// 		marginRight: '-50%',
// 		minWidth: '75%',
// 		maxWidth: '85%',
// 		zIndex: '100',
// 		transform: 'translate(-50%, -50%)',
// 	},
// };

Modal.setAppElement('#ModalElement');

const ProductModal = React.memo(({ open, closeModal, product }) => {
	const [form, setForm] = useState(false);
	const [productState, setProduct] = useState();

	const formHandler = () => setForm(!form);

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
					onClick={() => {
						closeModal();
						// resets the form to false in case user goes back
						setForm(false);
					}}
				>
					<i className="far fa-window-close"></i>
				</span>

				{!form && product ? (
					Object.keys(product).map((obj, i) => {
						let currentProduct = product[obj];

						return (
							<div className="modal-product-body" key={i}>
								<div className="product-col-1">
									<img
										key={i}
										className="modal-product-image"
										src={require(`./../../images/${currentProduct.model}.jpg`)}
										alt={currentProduct.model}
									/>
								</div>
								<div className="product-col-2">
									<h3 className="modal-product-title">
										{currentProduct.model}
									</h3>
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
									<button
										onClick={() => {
											formHandler();
											setProduct(currentProduct.model);
										}}
										className="modal-form-link"
									>
										<i className="fas fa-cart-plus"></i>
										<p>request price</p>
									</button>
								</div>
							</div>
						);
					})
				) : (
					<ProductFrom model={productState} />
				)}
			</Modal>
		</div>
	);
});

export default ProductModal;
