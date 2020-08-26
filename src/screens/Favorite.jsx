import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import ListItem from '../components/ListItem';
import ProductTeaser from '../components/ProductTeaser';

const Favorite = ({ navigation }) => {
	const favorites = useSelector(state => state.favorites);

	if (Object.keys(favorites).length) {
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					data={Object.values(favorites)}
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
					Vos favoris sont vides.
				</Text>
				<Text>
					Pour ajouter un produit à vos favoris. Vous pouvez scanner un produit
					ou en visiter un depuis votre historique puis cliquer sur l'étoile. Il
					apparaitra ensuite sur cette page.
				</Text>
			</View>
		);
	}
};

export default Favorite;
