import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Vibration, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import style from './style';
import { Icon } from 'react-native-elements';
import { blue, yellow } from '../../constants/colors';

const Scan = ({ navigation, addProductToHistory }) => {
	const focused = useIsFocused();
	const [camPermission, setCamPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const [flashOn, setFlash] = useState(false);
	// Used to wait for Tab animation before render or unrender Camera
	const [mountCamera, setMountCamera] = useState(false);

	useEffect(() => {
		Camera.requestPermissionsAsync().then(({ status }) => {
			setCamPermission(status === 'granted');
		});
	}, []);

	useEffect(() => {
		if (focused) {
			// Prevents from Tab animation bug while Camera is rendering
			setTimeout(() => setMountCamera(true), 300);
			// Reset scanned when screen is re-focused
			if (scanned) {
				setScanned(false);
			}
		} else {
			setTimeout(() => setMountCamera(false), 300);
		}
	}, [focused]);

	const handleScan = ({ data }) => {
		fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
			.then(response => response.json())
			.then(responseJson => {
				if (responseJson.product) {
					Vibration.vibrate();
					setScanned(true);
					const product = filterProduct(responseJson.product);
					addProductToHistory(product);
					navigation.navigate('Product', { product });
				}
			})
			.catch(error => console.error(error));
	};

	const toggleFlash = () => setFlash(!flashOn);

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
			scan_date: new Date().valueOf(),
		};
	};

	if (camPermission === false) {
		return (
			<View style={[style.page, style.pageText]}>
				<Text>
					Pas d'accès à l'appereil photo. Vous devez accepter l'utilisation de
					l'appereil photo pour le bon fonctionnement de cette application.
				</Text>
			</View>
		);
	} else if (camPermission === null || !mountCamera) {
		return (
			<View style={[style.page, style.pageWait]}>
				<ActivityIndicator color="white" />
			</View>
		);
	} else {
		return (
			<View style={{ flex: 1 }}>
				<Camera
					type={Camera.Constants.Type.back}
					style={style.camera}
					onBarCodeScanned={!scanned && focused ? handleScan : undefined}
					flashMode={
						flashOn
							? Camera.Constants.FlashMode.torch
							: Camera.Constants.FlashMode.off
					}
				>
					<View style={style.cameraView}>
						<TouchableOpacity onPress={toggleFlash} style={style.floatBtn}>
							<Icon
								name="lightbulb"
								size={25}
								type="font-awesome-5"
								color={yellow}
								solid={flashOn}
							/>
						</TouchableOpacity>
					</View>
				</Camera>
			</View>
		);
	}
};

export default Scan;
