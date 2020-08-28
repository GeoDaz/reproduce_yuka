import History from '../screens/History/container';
import Favorite from '../screens/Favorites/container';
import Scan from '../screens/Scan/container';

export default [
	{
		title: 'Historique',
		name: 'History',
		component: History,
		icon: { name: 'history' },
	},
	{
		title: 'Favoris',
		name: 'Favorite',
		component: Favorite,
		icon: { name: 'star', solid: true },
	},
	{
		title: 'Scanner',
		name: 'Scan',
		component: Scan,
		icon: { name: 'barcode' },
	},
];
