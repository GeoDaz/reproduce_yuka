import { StyleSheet } from 'react-native';
import { grey, white } from '../../constants/colors';

export default StyleSheet.create({
	card: {
		marginBottom: 7,
		backgroundColor: white,
		paddingVertical: 15,
		paddingHorizontal: 10,
		shadowColor: grey,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.3,
		shadowRadius: 1,
		elevation: 2,
	},
});
