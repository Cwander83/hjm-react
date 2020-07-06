import React from 'react';

import Modal from 'react-modal';

import './Modal.css';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		minWidth: '60%',
		maxWidth: '80%',
		transform: 'translate(-50%, -50%)',
	},
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#ModalElement');

const ProductModal = React.memo(({ open, closeModal, product }) => {
	
	return (
		<div>
			<Modal
				isOpen={open}
				// onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				overlayClassName="Overlay"
				contentLabel="Example Modal"
			>
				<span className="modal-close-btn" onClick={closeModal}>
					<i className="far fa-window-close"></i>
				</span>

				{product &&
					Object.keys(product).map((obj, i) => {
						let currentProduct = product[obj];
						return (
							<div className="modal-product-body" key={i}>
								
								{/* {console.log(`product[obj] => ${product[obj].id}`)} */}
								<div className="product-col-1">
								
									<img
										key={i}
										className="modal-product-image"
										src={require(`./../../images/${currentProduct.model}.jpg`)}
										alt={currentProduct.model}
									/>
								</div>
								<div className="product-col-2">
								<h3 className="modal-product-title">{currentProduct.model}</h3>
									<ul className="modal-list">
										<li><h4>Features</h4></li>
										{currentProduct.features.map((feature, index) => (
											<li key={index}>
												<p>&#8226; {feature}</p>
											</li>
										))}
									</ul>
									<span>Add to cart</span>
								</div>
							</div>
						);
					})}
				{/* 		
					<input />
					<button>tab navigation</button>
		
		 */}
			</Modal>
		</div>
	);
});

export default ProductModal;
