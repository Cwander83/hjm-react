import React from 'react';

import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#ModalElement');

const ProductModal = React.memo(({ open, closeModal, product }) => {
	console.log(product);
	return (
		<div>
			<Modal
				isOpen={open}
				// onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<button onClick={closeModal}>close</button>
				<div>I am a modal</div>
				{product &&
					Object.keys(product).map((obj, i) => {
						let currentProduct = product[obj];
						return (
							<div key={i}>
								{console.log(`product[obj] => ${product[obj].id}`)}
								<div className="product-col-1">
									<img
										key={i}
										className="product-image"
										src={require(`./../../images/${currentProduct.model}.jpg`)}
										alt={currentProduct.model}
									/>
									<p className="product-title">{currentProduct.model}</p>
								</div>
								<div className="product-col-2">
									<ul>
										{currentProduct.features.map((feature, index) => (
											<li key={index}>
												<p>{feature}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
						);
					})}
				<form>
					<input />
					<button>tab navigation</button>
					<button>stays</button>
					<button>inside</button>
					<button>the modal</button>
				</form>
			</Modal>
		</div>
	);
});

export default ProductModal;
