import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Search from './src/screens/Search';

const navigator = createStackNavigator(
	{
		Search: Search,
	},
	{
		initialRouteName: 'Search',
		defaultNavigationOptions: {
			title: 'Business Search'
		}
	}
);

const App = createAppContainer(navigator);

export default App;

// Client ID
// 3bC-hP51vy_y_JvwXRQEXQ
//
// API Key
// _a_7Q8qkoHFXzib9AW9V1ZqgVCZrM-iNTOGkQcIPVIhCsVjKDY4TYqK7fS_zDH2BUSOF7wlTqk-TdKMSOEz5jwmdmAfJQBxoOdWqM2-Sh4ULpW1va1khQ3NTB08zXnYx
