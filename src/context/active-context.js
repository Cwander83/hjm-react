import React from 'react';

export const ActiveContext = React.createContext({
	active: null,
	activeHandler: () => {},
	closeActiveHandler: () => {},
});

// Provider
const ActiveProvider = (props) => {
	const [active, setActive] = React.useState(false);
	
	const activeHandler = () => setActive(!active);

	const closeActiveHandler = () => 
		setActive(false);
	

	return (
		<ActiveContext.Provider
			value={{
				activeHandler: activeHandler,
				closeActiveHandler: closeActiveHandler,
				active: active,
			}}
		>
			{props.children}
		</ActiveContext.Provider>
	);
};

export default ActiveProvider;

// consumer
export const ActiveConsumer = ActiveContext.Consumer;
