import React from 'react';
import style from './style';
import { View } from 'react-native';

const ListItem = ({ children }) => <View style={[style.listItem]}>{children}</View>;

export default ListItem;
