import React from 'react';
import { FlatList, View, Text } from 'react-native';
import ListItem from '../../components/ListItem';
import ProductTeaser from '../../components/ProductTeaser';
import style from './style';

const History = ({ navigation, history }) => {
	if (Object.keys(history).length) {
		return (
			<View style={style.listWrapper}>
				<FlatList
					data={Object.values(history).sort((a, b) =>
						a.scan_date < b.scan_date ? 1 : -1
					)}
					keyExtractor={({ id }) => id}
					renderItem={({ item }) => (
						<ListItem>
							<ProductTeaser
								product={item}
								navigation={navigation}
								showDate
							/>
						</ListItem>
					)}
				/>
			</View>
		);
	} else {
		return (
			<View style={style.page}>
				<Text style={style.hat}>Votre historique est vide.</Text>
				<Text>
					Vous pouvez cliquer sur l'icon code barre en haut à droite pour
					commencer à scanner des produits.
				</Text>
			</View>
		);
	}
};

export default History;
