import React from 'react';

import './Products.css';

// import Spinner from '../../../ui/spinner';
import Modal from '../..//Modal/Modal';

const Products = React.memo(({ data }) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	const [selectedProduct, setProduct] = React.useState();

	const modalHandler = () => {
		setIsOpen(!modalIsOpen);
	};
	React.useEffect(() => {}, [data, selectedProduct]);

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
							<p className="product-title">
								{!data[obj].name ? data[obj].model : data[obj].name}
							</p>
						</div>
					);
				})}

			<Modal
				open={modalIsOpen}
				closeModal={modalHandler}
				product={selectedProduct}
			></Modal>
		</React.Fragment>
	);
});

export default Products;
