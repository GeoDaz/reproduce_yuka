import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import style from './style';
import { Icon } from 'react-native-elements';
import { yellow } from '../../constants/colors';

const Product = ({
	navigation,
	route,
	favorites,
	addProductToFavorites,
	removeProductFromFavorites,
}) => {
	const { product } = route.params;

	const toggleFavorite = () => {
		if (favorites[product.id]) {
			removeProductFromFavorites(product);
		} else {
			addProductToFavorites(product);
		}
	};

	return (
		<View style={style.page}>
			<TouchableOpacity onPress={() => navigation.goBack()} style={style.backBtn}>
				<Text style={style.backBtnText}>{'\u003C'} Retour</Text>
			</TouchableOpacity>
			<View style={style.row}>
				<Image
					style={style.image}
					source={{ uri: product.image_thumb_url }}
					resizeMode="contain"
				/>
				<View style={{ flexGrow: 1 }}>
					<Text>{product.product_name}</Text>
					<TouchableOpacity
						onPress={toggleFavorite}
						style={{ textAlign: 'left', alignItems: 'flex-start' }}
					>
						<Icon
							name="star"
							size={30}
							type="font-awesome-5"
							color={yellow}
							solid={!!favorites[product.id]}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Product;
