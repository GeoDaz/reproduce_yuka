import { StyleSheet } from 'react-native';
import { white, grey, lightGrey, black } from '../../constants/colors';

export default StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: lightGrey,
	},
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
	row: {
		flexDirection: 'row',
		marginBottom: 15,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	underTitle: {
		fontSize: 15,
		fontWeight: 'bold',
		marginBottom: 7,
	},
	grey: {
		color: grey,
	},
	wrapFixer: { width: 0, flexGrow: 1, flex: 1 },
	image: {
		width: 120,
		height: 120,
		marginRight: 10,
	},
	textImage: {
		marginLeft: 5,
	},
	favBtn: {
		textAlign: 'left',
		alignItems: 'flex-start',
		marginBottom: 10,
	},
	zoneText: {
		marginBottom: 10,
	},
	inline: {
		flexDirection: 'row',
	},
	bold: {
		fontWeight: 'bold',
	},
	iconWrapper: {
		width: 20
	},
	dropPosition: {
		position: 'relative',
		left: -2
	}
});
