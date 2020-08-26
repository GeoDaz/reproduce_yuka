import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';
import { blue } from './src/constants/colors';
import screens from './src/constants/screens';
import Product from './src/screens/Product/constainer';
import reducerCombiner from './src/reducers';
import StorageManager from './src/components/StorageManager';

const store = createStore(reducerCombiner);
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const ProductStack = ({ screen, route, navigation }) => {
	const focused = useIsFocused();

	useEffect(() => {
		if (focused && route.state) {
			console.log(route)
			navigation.reset({
				index: 0,
				routes: route.state.routes,
			});
		}
	}, [focused]);

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName={screen.name}
		>
			<Stack.Screen name={screen.name} component={screen.component} />
			<Stack.Screen name="Product" component={Product} />
		</Stack.Navigator>
	);
};

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<StorageManager />
				<StatusBar
					translucent
					backgroundColor={blue}
					barStyle="light-content"
					animated
				/>
				<Tab.Navigator
					tabBarOptions={{
						style: { paddingTop: Constants.statusBarHeight },
						activeTintColor: blue,
						showIcon: true,
						headerTitleAlign: 'center',
					}}
				>
					{screens.map((screen, i) => (
						<Tab.Screen
							key={i}
							name={screen.name}
							options={{
								tabBarLabel: screen.title,
								tabBarIcon: ({ color }) => (
									<Icon
										name={screen.icon.name}
										size={24}
										type="font-awesome-5"
										color={color}
										solid={screen.icon.solid}
									/>
								),
							}}
						>
							{props => <ProductStack {...props} screen={screen} />}
						</Tab.Screen>
					))}
				</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
