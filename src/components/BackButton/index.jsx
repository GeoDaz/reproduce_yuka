import React from 'react';
import style from './style';
import { TouchableOpacity, Text } from 'react-native';

const BackButton = ({ navigation }) => (
	<TouchableOpacity onPress={() => navigation.goBack()} style={style.btn}>
		<Text style={style.text}>{'\u003C'} Retour</Text>
	</TouchableOpacity>
);

export default BackButton;
