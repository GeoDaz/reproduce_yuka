// modules
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setHistory } from '../actions/history';
import { setFavorites } from '../actions/favorites';

const StorageManager = () => {
	const dispatch = useDispatch();
	const history = useSelector(state => state.history);
	const favorites = useSelector(state => state.favorites);

	useEffect(() => {
		AsyncStorage.getItem('history')
			.then(storedHistory => {
				if (storedHistory) {
					dispatch(setHistory(JSON.parse(storedHistory)));
				}
			})
			.catch(error => console.error(error));
		AsyncStorage.getItem('favorites')
			.then(storedFavorites => {
				if (storedFavorites) {
					dispatch(setFavorites(JSON.parse(storedFavorites)));
				}
			})
			.catch(error => console.error(error));
	}, []);

	useEffect(() => {
		AsyncStorage.setItem('history', JSON.stringify(history)).catch(error =>
			console.error(error)
		);
	}, [history]);

	useEffect(() => {
		AsyncStorage.setItem('favorites', JSON.stringify(favorites)).catch(error =>
			console.error(error)
		);
	}, [favorites]);

	return null;
};

export default StorageManager;
