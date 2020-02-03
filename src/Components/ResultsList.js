import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetails from './ResultDetails';

const ResultsList = ({title, results, navigation}) => {
	if(!results.length) {
		return null;
	}
	return (
		<View style={styles.results}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				data = {results}
				showsHorizontalScrollIndicator={false}
				renderItem = {({item}) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
						<ResultDetails
							result = {item}
						/>
						</TouchableOpacity>
					)
				}}
				keyExtractor = {(result) => result.id}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	results: {
		borderBottomColor: '#aaa',
		borderBottomWidth: 1,
		marginBottom: 10,
		paddingBottom: 10,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 10,
		marginLeft: 10,
	}
})

export default withNavigation(ResultsList);
