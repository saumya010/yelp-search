import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ResultDetails from './ResultDetails';

const ResultsList = ({title, results}) => {
	return (
		<View style={styles.results}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				data = {results}
				renderItem = {({item}) => {
					return (
						<ResultDetails
							result = {item}
						/>
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
	}
})

export default ResultsList;
