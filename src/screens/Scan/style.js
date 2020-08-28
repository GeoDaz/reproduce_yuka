import { StyleSheet } from 'react-native';
import { white, black, blue } from '../../constants/colors';

export default StyleSheet.create({
	page: {
		flex: 1,
		padding: 15,
	},
	pageText: {
		backgroundColor: white,
	},
	pageWait: {
		backgroundColor: black,
		justifyContent: 'center',
		alignItems: 'center',
	},
	camera: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	cameraView: {
		flex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	floatBtn: {
		backgroundColor: white,
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 25,
		bottom: 50
	}
});
