import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import ListItem from '../components/ListItem';
import ProductTeaser from '../components/ProductTeaser';

const History = ({ navigation }) => {
	const history = useSelector(state => state.history);

	if (Object.keys(history).length) {
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					data={Object.values(history)}
					keyExtractor={({ id }) => id}
					renderItem={({ item }) => (
						<ListItem>
							<ProductTeaser product={item} navigation={navigation} />
						</ListItem>
					)}
				/>
			</View>
		);
	} else {
		return (
			<View style={{ flex: 1, padding: 15 }}>
				<Text style={{ textAlign: 'center', marginBottom: 10 }}>
					Votre historique est vide.
				</Text>
				<Text>
					Vous pouvez cliquer sur l'icon code barre en haut à droite pour
					commencer à scanner des produits.
				</Text>
			</View>
		);
	}
};

export default History;
