import { StyleSheet } from 'react-native';
import { blue, white } from '../../constants/colors';

export default StyleSheet.create({
	btn: {
		marginBottom: 15,
		backgroundColor: blue,
		borderRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 5,
		alignSelf: 'flex-start',
	},
	text: {
		fontSize: 15,
		color: white,
	},
});
