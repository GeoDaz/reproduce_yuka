import React from 'react';
import { TouchableOpacity } from 'react-native';
import { blue } from '../../constants/colors';
import { Icon } from 'react-native-elements';

const BackButton = ({ navigation }) => (
	<TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 10 }}>
		<Icon name="arrow-left" size={24} type="font-awesome-5" color={blue} />
	</TouchableOpacity>
);

export default BackButton;
