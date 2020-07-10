import React from 'react';

import './Products.css';

// import Spinner from '../../../ui/spinner';
import Modal from '../..//Modal/Modal';

const Products = React.memo(({ data }) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [form, setForm] = React.useState(false);

	const formHandler = () => setForm(!form);

	const [selectedProduct, setProduct] = React.useState();

	const modalHandler = () => {
		setIsOpen(!modalIsOpen);
	};

	console.log(`product rendered`);

	return (
		<React.Fragment>
			{data &&
				Object.keys(data).map((obj, i) => {
					return (
						<div
							className="product"
							key={data[obj].id}
							onClick={() => {
								modalHandler();
								setProduct(
									data.filter((product) => product.id === data[obj].id)
								);
							}}
						>
							<img
								className="product-image"
								src={require(`../../../images/${data[obj].model}.jpg`)}
								alt={data[obj].model}
							/>
							<p className="product-title">{data[obj].model}</p>
						</div>
					);
				})}

			<Modal
				open={modalIsOpen}
				closeModal={modalHandler}
				product={selectedProduct}
				formHandler={formHandler}
				orderForm={form}
			></Modal>
		</React.Fragment>
	);
});

export default Products;
