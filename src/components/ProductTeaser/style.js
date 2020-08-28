import { StyleSheet } from 'react-native';

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
	bold: {
		fontWeight: 'bold',
	},
	zoneText: {
		flexDirection: 'row',
	},
});
