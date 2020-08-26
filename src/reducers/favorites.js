import {
	SET_FAVORITES,
	ADD_PRODUCT_TO_FAVORITES,
	REMOVE_PRODUCT_FROM_FAVORITES,
	REMOVE_FAVORITES,
} from '../actions/favorites';

const favorites = (state = {}, action) => {
	let newState;

	switch (action.type) {
		case SET_FAVORITES:
			return action.favorites;

		case ADD_PRODUCT_TO_FAVORITES:
			return { ...state, [action.product.id]: action.product };

		case REMOVE_PRODUCT_FROM_FAVORITES:
			newState = { ...state };
			delete newState[action.product.id];
			return newState;

		case REMOVE_FAVORITES:
			return {};

		default:
			return state;
	}
};

export default favorites;
