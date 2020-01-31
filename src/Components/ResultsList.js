import React from 'react';
import {View, Text, FlatList} from 'react-native';

const ResultsList = ({title, results}) => {
	return (
		<View>
			<Text>{title}</Text>
			<FlatList
				data = {results}
				renderItem = {({item}) => {
					<Text>{item.title}</Text>
				}}
			/>
		</View>
	)
}

export default ResultsList;
