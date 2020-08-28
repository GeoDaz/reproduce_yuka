import React from 'react';
import style from './style';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { setNutriScoreColor } from '../../functions';
import HighLight from '../HighLight';

const ProductTeaser = ({ navigation, product, showDate = false }) => {
	const onPress = () => {
		navigation.navigate('Product', { product });
	};

	return (
		<TouchableOpacity onPress={onPress} style={style.wrapper}>
			<Image
				style={style.image}
				// ternary for IOS
				source={product.image_small_url ? { uri: product.image_small_url } : null}
				resizeMode="contain"
			/>
			<View style={style.wrapFixer}>
				<Text style={style.bold}>{product.product_name}</Text>
				{showDate && (
					<Text>
						{new Date(product.scan_date).toLocaleDateString()} à{' '}
						{new Date(product.scan_date).toLocaleTimeString()}
					</Text>
				)}
				{!!product.nutrition_grade_fr && (
					<View style={style.zoneText}>
						<Text>Nutriscore : </Text>
						<HighLight color={setNutriScoreColor(product.nutrition_grade_fr)}>
							{product.nutrition_grade_fr.toUpperCase()}
						</HighLight>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);
};

export default ProductTeaser;
