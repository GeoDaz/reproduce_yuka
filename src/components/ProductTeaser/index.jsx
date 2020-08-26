import React from 'react';
import style from './style';
import { Text, TouchableOpacity, Image } from 'react-native';

const ProductTeaser = ({ navigation, product }) => {
	const onPress = () => {
		navigation.navigate('Product', { product });
	};

	return (
		<TouchableOpacity onPress={onPress} style={style.wrapper}>
			<Image
				style={style.image}
				source={{ uri: product.image_small_url }}
				resizeMode="contain"
			/>
			<Text style={style.text}>{product.product_name}</Text>
		</TouchableOpacity>
	);
};

export default ProductTeaser;
