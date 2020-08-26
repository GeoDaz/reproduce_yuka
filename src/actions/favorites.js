export const SET_FAVORITES = 'SET_FAVORITES';
export const ADD_PRODUCT_TO_FAVORITES = 'ADD_PRODUCT_TO_FAVORITES';
export const REMOVE_PRODUCT_FROM_FAVORITES = 'REMOVE_PRODUCT_FROM_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

export const setFavorites = favorites => ({
	type: SET_FAVORITES,
	favorites,
});
export const addProductToFavorites = product => ({
	type: ADD_PRODUCT_TO_FAVORITES,
	product,
});
export const removeProductFromFavorites = product => ({
	type: REMOVE_PRODUCT_FROM_FAVORITES,
	product,
});
export const removeFavorites = () => ({
	type: REMOVE_FAVORITES,
});
