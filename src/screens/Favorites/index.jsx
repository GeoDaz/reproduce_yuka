import React from 'react';
import { FlatList, View, Text } from 'react-native';
import ListItem from '../../components/ListItem';
import ProductTeaser from '../../components/ProductTeaser';
import style from './style';

const Favorite = ({ navigation, favorites }) => {
	if (Object.keys(favorites).length) {
		return (
			<View style={style.listWrapper}>
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
			<View style={style.page}>
				<Text style={style.hat}>Vos favoris sont vides.</Text>
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
