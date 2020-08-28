import React from 'react';
import style from './style';
import { View, Text } from 'react-native';

const HighLight = ({ children, color }) => (
	<View style={[style.highlight, style[color]]}>
		<Text style={style.text}>{children}</Text>
	</View>
);

export default HighLight;
