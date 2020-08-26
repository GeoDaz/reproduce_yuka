import {
	SET_HISTORY,
	ADD_PRODUCT_TO_HISTORY,
	REMOVE_PRODUCT_FROM_HISTORY,
	REMOVE_HISTORY,
} from '../actions/history';

const history = (state = {}, action) => {
	let newState;

	switch (action.type) {
		case SET_HISTORY:
			return action.history;

		case ADD_PRODUCT_TO_HISTORY:
			return { ...state, [action.product.id]: action.product };

		case REMOVE_PRODUCT_FROM_HISTORY:
			newState = { ...state };
			delete newState[action.product.id];
			return newState;

		case REMOVE_HISTORY:
			return {};

		default:
			return state;
	}
};

export default history;
