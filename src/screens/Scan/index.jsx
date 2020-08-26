import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, ActivityIndicator, Vibration } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import style from './style';
import { blue } from '../../constants/colors';
import { addProductToHistory } from '../../actions/history';

const Scan = ({ navigation }) => {
	const focused = useIsFocused();
	const dispatch = useDispatch();
	const [camPermission, setCamPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	useEffect(() => {
		Camera.requestPermissionsAsync().then(({ status }) => {
			setCamPermission(status === 'granted');
		});
	}, []);

	useEffect(() => {
		// Reset scanned when screen is re-focused
		if (scanned && focused) {
			setScanned(false);
		}
	}, [focused]);

	const handleScan = ({ data }) => {
		setScanned(true);
		Vibration.vibrate();
		console.log(`https://world.openfoodfacts.org/api/v0/product/${data}.json`);
		fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
			.then(response => response.json())
			.then(responseJson => {
				if (responseJson.product) {
					const product = filterProduct(responseJson.product);
					dispatch(addProductToHistory(product));
					navigation.navigate('Product', { product });
				}
			})
			.catch(error => console.error(error));
	};

	const filterProduct = product => {
		return {
			id: product._id,
			product_name: product.product_name_fr || product.product_name,
			image_thumb_url: product.image_thumb_url,
			image_small_url: product.image_small_url,
			categories: product.categories,
			ingredients_text: product.ingredients_text_fr || product.ingredients_text,
			brands: product.brands,
			nutrition_grade_fr: product.nutrition_grade_fr,
			nutrient_levels: product.nutrient_levels,
		};
	};

	if (camPermission === null) {
		return (
			<View style={style.page}>
				<ActivityIndicator color={blue} />
			</View>
		);
	} else if (camPermission === false) {
		return (
			<View style={style.page}>
				<Text>
					Pas d'accès à l'appereil photo. Vous devez accepter l'utilisation de
					l'appereil photo pour le bon fonctionnement de cette application.
				</Text>
			</View>
		);
	} else {
		return (
			<View style={{ flex: 1 }}>
				<Camera
					type={Camera.Constants.Type.back}
					style={style.camera}
					onBarCodeScanned={!scanned && focused ? handleScan : undefined}
				>
					<View style={style.cameraView}></View>
				</Camera>
			</View>
		);
	}
};

export default Scan;
