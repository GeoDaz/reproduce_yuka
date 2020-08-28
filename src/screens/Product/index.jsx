import React, { useEffect, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import style from './style';
import { Icon } from 'react-native-elements';
import { yellow } from '../../constants/colors';
import BackButton from '../../components/BackButton';
import HighLight from '../../components/HighLight';
import { setNutriScoreColor } from '../../functions';

const Product = ({
	navigation,
	route,
	tabRoute,
	parentFocus,
	favorites,
	addProductToFavorites,
	removeProductFromFavorites,
}) => {
	const { product } = route.params;
	const mounted = useRef(false);

	useEffect(() => {
		// TODO : tester le bug du navigator
		// Reset ProductStack navigation when tab change on parent TabScreen
		// Mounted shoulb verified because useEffect is done at componentDidMount even if parentFocus is not changing like it asked in useEffect []
		if (mounted.current && parentFocus) {
			navigation.navigate(tabRoute.name);
		}
		mounted.current = true;
	}, [parentFocus]);

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
			<BackButton navigation={navigation} />
			<View style={[style.row, style.card]}>
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
						<View style={[style.zoneText, style.inline]}>
							<Text>Nutriscore : </Text>
							<HighLight
								color={setNutriScoreColor(product.nutrition_grade_fr)}
							>
								{product.nutrition_grade_fr.toUpperCase()}
							</HighLight>
						</View>
					)}
				</View>
			</View>
			<Text style={style.zoneText}>
				<Text style={style.bold}>Catégories : </Text>
				{product.categories}
			</Text>
			<Text style={style.zoneText}>
				<Text style={style.bold}>Ingrédients : </Text>
				{product.ingredients_text}
			</Text>
			<Text style={style.zoneText}>
				<Text style={style.bold}>Teneur en : </Text>
			</Text>
			<View style={[style.zoneText, style.inline]}>
				<Text style={style.bold}> - Sucre : </Text>
				<HightLightNutrientLevel level={product.nutrient_levels.sugars} />
			</View>
			<View style={[style.zoneText, style.inline]}>
				<Text style={style.bold}> - Graisses saturés : </Text>
				<HightLightNutrientLevel
					level={product.nutrient_levels['saturated-fat']}
				/>
			</View>
			<View style={[style.zoneText, style.inline]}>
				<Text style={style.bold}> - Graisses : </Text>
				<HightLightNutrientLevel level={product.nutrient_levels.fat} />
			</View>
			<View style={[style.zoneText, style.inline]}>
				<Text style={style.bold}> - Sel : </Text>
				<HightLightNutrientLevel level={product.nutrient_levels.salt} />
			</View>
		</View>
	);
};

export default Product;
