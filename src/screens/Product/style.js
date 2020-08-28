import { StyleSheet } from 'react-native';
import { white, grey } from '../../constants/colors';

export default StyleSheet.create({
	page: {
		flex: 1,
		padding: 15,
		backgroundColor: white,
	},
	row: {
		flexDirection: 'row',
		marginBottom: 15,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	brand: {
		color: grey,
	},
	wrapFixer: { width: 0, flexGrow: 1, flex: 1 },
	image: {
		width: 120,
		height: 120,
		marginRight: 15,
	},
	favBtn: { textAlign: 'left', alignItems: 'flex-start', marginBottom: 10 },
	zoneText: {
		marginBottom: 5,
	},
	inline: {
		flexDirection: 'row',
	},
	bold: {
		fontWeight: 'bold',
	},
});
