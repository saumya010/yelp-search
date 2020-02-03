import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Search from './src/screens/Search';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
	{
		Search: Search,
		ResultsShow: ResultsShowScreen,
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
