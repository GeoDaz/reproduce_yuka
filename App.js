import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';
import { darkBlue, blue, white } from './src/constants/colors';
import tabs from './src/constants/tabs';
import Product from './src/screens/Product/container';
import reducerCombiner from './src/reducers';
import StorageManager from './src/components/StorageManager';

const store = createStore(reducerCombiner);
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const UnderRouteStack = ({ screen }) => (
	<Stack.Navigator
		screenOptions={{ headerShown: false }}
		initialRouteName={screen.name}
	>
		<Stack.Screen name={screen.name} component={screen.component} />
		<Stack.Screen name="Product" component={Product} />
	</Stack.Navigator>
);

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<StorageManager />
				<StatusBar
					translucent
					backgroundColor={darkBlue}
					barStyle="light-content"
					animated
				/>
				<Tab.Navigator
					tabBarOptions={{
						style: {
							paddingTop: Constants.statusBarHeight,
							backgroundColor: blue,
							zIndex: 1,
							position: 'relative',
						},
						activeTintColor: white,
						showIcon: true,
						headerTitleAlign: 'center',
						indicatorStyle: {backgroundColor: white}
					}}
				>
					{tabs.map((tab, i) => (
						<Tab.Screen
							key={i}
							name={tab.name}
							options={{
								tabBarLabel: tab.title,
								tabBarIcon: ({ color }) => (
									<Icon
										name={tab.icon.name}
										size={24}
										type="font-awesome-5"
										color={color}
										solid={tab.icon.solid}
									/>
								),
							}}
							listeners={({ navigation }) => ({
								tabPress: e => {
									e.preventDefault();
									navigation.navigate(tab.name, { screen: tab.name });
								},
							})}
						>
							{props => <UnderRouteStack screen={tab} />}
						</Tab.Screen>
					))}
				</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
