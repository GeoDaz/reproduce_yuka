import History from '../screens/History';
import Favorite from '../screens/Favorite';
import Scan from '../screens/Scan';

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
