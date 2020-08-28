import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import style from './style';
import { Icon } from 'react-native-elements';
import { yellow, grey } from '../../constants/colors';
import BackButton from '../../components/BackButton';
import HighLight from '../../components/HighLight';
import { setNutriScoreColor } from '../../functions';

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

	const HightLightNutrientLevel = ({ level }) => {
		switch (level) {
			case 'low':
				return <HighLight color={'green'}>faible</HighLight>;
			case 'moderate':
				return <HighLight color={'yellow'}>modérée</HighLight>;
			case 'high':
				return <HighLight color={'red'}>élevée</HighLight>;
			default:
				return <Text>{level}</Text>;
		}
	};

	return (
		<View style={style.page}>
			<View style={[style.row, style.card]}>
				<BackButton navigation={navigation} />
				<Image
					style={style.image}
					// ternary for IOS
					source={
						product.image_thumb_url ? { uri: product.image_thumb_url } : null
					}
					resizeMode="contain"
				/>
				<View style={style.wrapFixer}>
					<Text style={style.title}>{product.product_name}</Text>
					{!!product.brands && (
						<Text style={[style.zoneText, style.brand]}>
							{product.brands.replace(',', ', ')}
						</Text>
					)}
					<TouchableOpacity onPress={toggleFavorite} style={style.favBtn}>
						<Icon
							name="star"
							size={30}
							type="font-awesome-5"
							color={yellow}
							solid={!!favorites[product.id]}
						/>
					</TouchableOpacity>
					{!!product.nutrition_grade_fr && (
						<View style={style.inline}>
							<HighLight
								color={setNutriScoreColor(product.nutrition_grade_fr)}
							>
								{product.nutrition_grade_fr.toUpperCase()}
							</HighLight>
							<Text style={[style.grey, style.textImage]}>Nutri-Score</Text>
						</View>
					)}
				</View>
			</View>
			<View style={style.card}>
				<View style={style.zoneText}>
					<Text style={style.underTitle}>Catégories</Text>
					<Text>{product.categories}</Text>
				</View>
			</View>
			<View style={style.card}>
				<View style={style.zoneText}>
					<Text style={style.underTitle}>Ingrédients</Text>
					<Text>{product.ingredients_text}</Text>
				</View>
			</View>
			<View style={style.card}>
				<View style={[style.zoneText, style.inline]}>
					<View style={style.iconWrapper}>
						<Icon name="cubes" size={18} type="font-awesome-5" color={grey} />
					</View>
					<Text style={[style.bold, style.textImage]}>Teneur en Sucre : </Text>
					<HightLightNutrientLevel level={product.nutrient_levels.sugars} />
				</View>
				<View style={[style.zoneText, style.inline]}>
					<View style={style.iconWrapper}>
						<Icon
							name="fill-drip"
							size={15}
							type="font-awesome-5"
							color={grey}
						/>
					</View>
					<Text style={[style.bold, style.textImage]}>
						Teneur en Graisses saturés :{' '}
					</Text>
					<HightLightNutrientLevel
						level={product.nutrient_levels['saturated-fat']}
					/>
				</View>
				<View style={[style.zoneText, style.inline]}>
					<View style={[style.iconWrapper, style.dropPosition]}>
						<Icon name="tint" size={15} type="font-awesome-5" color={grey} />
					</View>
					<Text style={[style.bold, style.textImage]}>
						Teneur en Graisses :{' '}
					</Text>
					<HightLightNutrientLevel level={product.nutrient_levels.fat} />
				</View>
				<View style={[style.zoneText, style.inline]}>
					<View style={style.iconWrapper}>
						<Icon
							name="spray-can"
							size={15}
							type="font-awesome-5"
							color={grey}
						/>
					</View>
					<Text style={[style.bold, style.textImage]}>Teneur en Sel : </Text>
					<HightLightNutrientLevel level={product.nutrient_levels.salt} />
				</View>
			</View>
		</View>
	);
};

export default Product;
