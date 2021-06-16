import produce from 'immer';

const initialState = { cart: [], summary: 0 };

export default produce((state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			state.cart.push(action.payload);
			state.summary += action.payload.item.price * action.payload.item.quantity;
			break;
		case 'DELETE_ITEM':
			debugger;
			const price = state.cart[action.payload].item.price * state.cart[action.payload].item.quantity;
			delete state.cart[action.payload];
			state.summary -= price;
			break;
		case 'ADD_ONE_ITEM':
			state.cart[action.payload].item.quantity++;
			state.summary += state.cart[action.payload].item.price;
			break;

		case 'DEDUCT_ONE_ITEM':
			state.cart[action.payload].item.quantity--;
			state.summary -= state.cart[action.payload].item.price;
			break;
		default:
			break;
	}
}, initialState);
