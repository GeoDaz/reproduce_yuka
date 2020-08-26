import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	page: {
		flex: 1,
		padding: 15,
	},
	camera: {
		flex: 1,
		flexDirection: 'column',
        justifyContent: 'flex-end',
	},
	cameraView: {
		flex: 1,
		backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
	},
});
