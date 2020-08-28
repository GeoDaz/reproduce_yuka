import { StyleSheet } from 'react-native';
import { grey } from '../../constants/colors';

export default StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
	},
	image: {
		width: 60,
		height: 60,
		marginRight: 10,
	},
	wrapFixer: { width: 0, flexGrow: 1, flex: 1 },
	grow: { flexGrow: 1 },
	title: {
		fontWeight: 'bold',
		marginBottom: 3,
	},
	grey: {
		color: grey,
	},
	textImage: {
		marginLeft: 5
	},
	history: { flexDirection: 'row', marginTop: 5 },
	zoneText: {
		flexDirection: 'row',
	},
});
