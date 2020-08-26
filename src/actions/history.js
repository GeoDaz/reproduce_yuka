export const SET_HISTORY = 'SET_HISTORY';
export const ADD_PRODUCT_TO_HISTORY = 'ADD_PRODUCT_TO_HISTORY';
export const REMOVE_PRODUCT_FROM_HISTORY = 'REMOVE_PRODUCT_FROM_HISTORY';
export const REMOVE_HISTORY = 'REMOVE_HISTORY';

export const setHistory = history => ({
	type: SET_HISTORY,
	history,
});
export const addProductToHistory = product => ({
	type: ADD_PRODUCT_TO_HISTORY,
	product,
});
export const removeProductFromHistory = product => ({
	type: REMOVE_PRODUCT_FROM_HISTORY,
	product,
});
export const removeHistory = () => ({
	type: REMOVE_HISTORY,
});
