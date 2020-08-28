import { StyleSheet } from 'react-native';
import { white, red, orange, yellow, olive, green } from '../../constants/colors';

export default StyleSheet.create({
	highlight: {
		borderRadius: 5,
		alignSelf: 'flex-start',
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderRadius: 5,
	},
	text: {
		color: white,
		fontSize: 12
	},
	red: {
		backgroundColor: red,
	},
	orange: {
		backgroundColor: orange,
	},
	yellow: {
		backgroundColor: yellow,
	},
	olive: {
		backgroundColor: olive,
	},
	green: {
		backgroundColor: green,
	},
});
