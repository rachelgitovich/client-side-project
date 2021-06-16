export const addToCart = (item) => {
	return { type: 'ADD_ITEM', payload: item };
};

export const deleteItem = (index) => {
	return { type: 'DELETE_ITEM', payload: index };
};

export const addOne = (index) => {
	return { type: 'ADD_ONE_ITEM', payload: index };
};

export const deductOne = (index) => {
	return { type: 'DEDUCT_ONE_ITEM', payload: index };
};
