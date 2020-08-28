import React from 'react';
import style from './style';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { setNutriScoreColor } from '../../functions';
import HighLight from '../HighLight';
import { Icon } from 'react-native-elements';
import { grey } from '../../constants/colors';

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
				<View style={style.grow}>
					<Text style={style.title}>{product.product_name}</Text>
					{!!product.nutrition_grade_fr && (
						<View style={style.zoneText}>
							<HighLight
								color={setNutriScoreColor(product.nutrition_grade_fr)}
							>
								{product.nutrition_grade_fr.toUpperCase()}
							</HighLight>
							<Text style={[style.grey, style.textImage]}>Nutri-Score</Text>
						</View>
					)}
				</View>
				{showDate && (
					<View style={style.history}>
						<Icon
							name="history"
							size={15}
							type="font-awesome-5"
							color={grey}
						/>
						<Text style={style.textImage}>
							{new Date(product.scan_date).toLocaleDateString()} à{' '}
							{new Date(product.scan_date).toLocaleTimeString()}
						</Text>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);
};

export default ProductTeaser;
