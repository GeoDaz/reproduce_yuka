import { StyleSheet } from 'react-native';
import { blue } from '../../constants/colors';

export default StyleSheet.create({
	page: {
		flex: 1,
		padding: 15,
	},
	row: {
		flexDirection: 'row',
		marginBottom: 15,
	},
	textRow: {
		flexShrink: 1,
	},
	image: {
		width: 120,
		height: 120,
		marginRight: 15,
	},
	backBtn: {
		marginBottom: 10,
	},
	backBtnText: {
		fontSize: 15,
		color: blue,
	},
});
