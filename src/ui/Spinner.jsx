import React from 'react';

import Loader from 'react-loader-spinner';
const spinner = () => {
	//other logic

	return (
		<React.Fragment>
			<Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
		</React.Fragment>
	);
};
export default spinner;
