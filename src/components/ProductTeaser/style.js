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
	text: {
		flexShrink: 1,
	},
});
