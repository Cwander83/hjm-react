import React, { useContext } from 'react';

import './Products.css';

// import Spinner from '../../../ui/spinner';
import Modal from '../..//Modal/Modal';

import ActiveProduct from '../ActiveProduct/ActiveProduct';
import { ActiveContext } from '../../../context/active-context';

const Products = React.memo(({ data }) => {
	const { active, activeHandler } = useContext(ActiveContext);
	const [isDesktop, setDesktop] = React.useState(window.innerWidth > 475);
	
	const updateMedia = () => {
		setDesktop(window.innerWidth > 475);
	};

	React.useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	const [modalIsOpen, setIsOpen] = React.useState(false);

	const [selectedProduct, setProduct] = React.useState();
	

	const modalHandler = () => {
		setIsOpen(!modalIsOpen);
	};
	React.useEffect(() => {}, [data, selectedProduct]);

	

	return (
		<React.Fragment>
			{active && !isDesktop ? (
				<ActiveProduct
					product={selectedProduct}
					
				/>
			) : (
				<>
					{data &&
						Object.keys(data).map((obj, i) => {
							return (
								<div
									className="product"
									key={data[obj].id}
									onClick={() => {
										modalHandler();
										activeHandler();
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
				</>
			)}
			{!isDesktop ? (
				<></>
			) : (
				<Modal
					open={modalIsOpen}
					closeModal={modalHandler}
					product={selectedProduct}
				></Modal>
			)}
		</React.Fragment>
	);
});

export default Products;
